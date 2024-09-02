import { PaymentMethodType } from "@prisma/client";

export const paymentMethodNameMap: Record<PaymentMethodType, string> = {
	[PaymentMethodType.EFECTIVO]: "Efectivo",
	[PaymentMethodType.PLIN]: "Plin",
	[PaymentMethodType.YAPE]: "Yape",
};

export const paymentMethodsTypes = Object.keys(
	PaymentMethodType,
) as PaymentMethodType[];

export const FROM_ACTIONS_PARAM = "from" as const;
