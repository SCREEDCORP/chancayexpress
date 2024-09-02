"use server";
import { ProductRequestStatus, type ProductRequest } from "@prisma/client";
import { z } from "zod";

import { createCode } from "@/lib/utils";
import { db } from "@/server/db";
import { sendStoreConfirmationMessage } from "@/server/ws";
import type { ZodInferSchema } from "@/types";
import { actionClient, ActionError } from ".";

export const buyProductAction = actionClient
	.schema(
		z.object<
			ZodInferSchema<
				Omit<
					ProductRequest,
					| "id"
					| "createdAt"
					| "updatedAt"
					| "code"
					| "status"
					| "requestPriceInCents"
					| "whatsappMessageId"
				>
			>
		>({
			quantity: z.number(),
			description: z.string().nullable(),
			deliveryPriceInCents: z.number(),
			clientPhone: z.string(),
			deliveryAddress: z.string(),
			methodId: z.number(),
			productId: z.string(),
		}),
	)
	.action(async ({ parsedInput: { productId, methodId, ...data } }) => {
		const product = await db.product.findUnique({
			where: {
				id: productId,
			},
			include: {
				user: {
					select: {
						phone: true,
					},
				},
			},
		});

		if (!product) throw new ActionError("El producto no existe");

		const userPhone = product.user.phone;

		if (!userPhone)
			throw new ActionError("El negocio no tiene un número de teléfono");

		if (!product.status)
			throw new ActionError("El producto no esta disponible");

		const paymentMethod = await db.paymentMethod.findUnique({
			where: {
				id: methodId,
			},
		});

		if (!paymentMethod) throw new ActionError("El método de pago no existe");

		if (!paymentMethod.status)
			throw new ActionError(
				"El método de pago ha sido desactivado por el negocio",
			);

		return db.$transaction(async tx => {
			const newRequest = await tx.productRequest.create({
				data: {
					...data,
					productId,
					methodId,
					status: ProductRequestStatus.PENDING_APPROVAL,
					code: createCode(),
					requestPriceInCents: product.costInCents * data.quantity,
				},
				select: {
					id: true,
					method: { select: { type: true } },
					clientPhone: true,
				},
			});

			// enviar al numero de whatsapp del negocio que ha recibido una compra
			const res = await sendStoreConfirmationMessage({
				recipient: "51" + userPhone,
				product: `${data.quantity} x ${product.name}`,
				address: data.deliveryAddress,
				totalPriceInCents: product.costInCents * data.quantity,
				paymentMethod: newRequest.method.type,
				clientPhone: newRequest.clientPhone,
			});

			// enviar al numero de whatsapp del cliente que ha realizado el pedido
			// const resClient = await sendStoreConfirmationMessage({
			// 	recipient: "51" + newRequest.clientPhone,
			// 	product: `${data.quantity} x ${product.name}`,
			// 	address: data.deliveryAddress,
			// 	totalPriceInCents: product.costInCents * data.quantity,
			// 	paymentMethod: newRequest.method.type,
			// 	clientPhone: newRequest.clientPhone,
			// });

			console.log(JSON.stringify(res, null, 2));
			// console.log(JSON.stringify(resClient, null, 2));

			await tx.productRequest.update({
				where: { id: newRequest.id },
				data: {
					whatsappMessageId: res.messages[0].id,
				},
			});

			return newRequest.id;
		});
	});
