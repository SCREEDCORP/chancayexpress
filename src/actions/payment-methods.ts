"use server";
import { PaymentMethodType } from "@prisma/client";
import { z } from "zod";

import { db } from "@/server/db";
import { actionClient } from ".";

export const createPaymentMethodAction = actionClient
	.schema(
		z.object({
			type: z.nativeEnum(PaymentMethodType),
			image: z.string().optional(),
			userId: z.string(),
		}),
	)
	.action(async ({ parsedInput }) => {
		const paymentMethod = await db.paymentMethod.findUnique({
			where: {
				type_userId: {
					type: parsedInput.type,
					userId: parsedInput.userId,
				},
			},
		});

		if (paymentMethod) throw new Error("El metodo de pago ya existe");

		await db.paymentMethod.create({
			data: parsedInput,
		});
	});

export const updatePaymentMethodAction = actionClient
	.schema(
		z.object({
			id: z.number(),
			image: z.string().optional(),
			status: z.boolean().optional(),
		}),
	)
	.action(async ({ parsedInput: { id, ...data } }) => {
		const paymentMethod = await db.paymentMethod.findUnique({
			where: {
				id,
			},
		});

		if (!paymentMethod) throw new Error("El metodo de pago no existe");

		await db.paymentMethod.update({
			where: { id },
			data,
		});
	});

export const deletePaymentMethodAction = actionClient
	.schema(
		z.object({
			id: z.number(),
		}),
	)
	.action(async ({ parsedInput: { id } }) => {
		const paymentMethod = await db.paymentMethod.findUnique({
			where: {
				id,
			},
		});

		if (!paymentMethod) throw new Error("El metodo de pago no existe");

		await db.paymentMethod.delete({
			where: { id },
		});
	});
