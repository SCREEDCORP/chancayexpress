import { PaymentMethodType } from "@prisma/client";
import { z } from "zod";

export const updatePaymentMethodSchema = z.object({
	id: z.number(),
	image: z.string().optional(),
	status: z.boolean().optional(),
});

export type UpdatePaymentMethodSchema = z.infer<
	typeof updatePaymentMethodSchema
>;

export const createPaymentMethodSchema = z.object({
	type: z.nativeEnum(PaymentMethodType),
	image: z.string().optional(),
	userId: z.string(),
});

export type CreatePaymentMethodSchema = z.infer<
	typeof createPaymentMethodSchema
>;
