import type { PaymentMethodType } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import { twMerge } from "tailwind-merge";

import { paymentMethodsTypes } from "@/core/constants";
import type { GetBucketSignedUrlParams } from "./s3";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(priceInCents: number) {
	return Intl.NumberFormat("es-PE", {
		style: "currency",
		currency: "PEN",
	}).format(priceInCents / 100);
}

export function createCode() {
	return crypto.randomBytes(5).toString("hex").toUpperCase();
}

export function getBucketObjectInfo({
	key,
	privateFile,
	buckerName,
}: GetBucketSignedUrlParams & { buckerName: string }) {
	const parsedKey = key.replaceAll(" ", "_");
	const finalKey = (privateFile ? "" : "public/") + parsedKey;

	return {
		key: finalKey,
		objectUrl: `https://${buckerName}.s3.sa-east-1.amazonaws.com/${finalKey}`,
	};
}

export function getPaymentMethodsShift(methodTypes: PaymentMethodType[]) {
	return paymentMethodsTypes.filter(m => !methodTypes.includes(m));
}
