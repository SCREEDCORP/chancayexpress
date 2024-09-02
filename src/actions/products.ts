"use server";
import { ProductRequestStatus, type ProductRequest } from "@prisma/client";
import { z } from "zod";

import { createCode } from "@/lib/utils";
import { db } from "@/server/db";
import { sendWhatsappMessage } from "@/server/ws";
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
			throw new ActionError("El método de pago está desactivado");

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
				select: { id: true, method: { select: { type: true } } },
			});

			// enviar al numero de whatsapp del negocio que ha recibido una compra
			const res = await sendWhatsappMessage({
				recipient: "51" + userPhone,
				productDescription: `${data.quantity} x ${product.name}`,
				deliveryAddress: data.deliveryAddress,
				totalPrice: product.costInCents * data.quantity,
				paymentMethod: newRequest.method.type,
			});

			await tx.productRequest.update({
				where: { id: newRequest.id },
				data: {
					whatsappMessageId: res.messages[0].id,
				},
			});

			return newRequest.id;
		});
	});
