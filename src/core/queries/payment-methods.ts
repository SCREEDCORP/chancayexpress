import { createMutation } from "react-query-kit";

import {
	createPaymentMethodAction,
	updatePaymentMethodAction,
} from "@/actions/payment-methods";
import { env } from "@/env.mjs";
import { generateStorageKey, getBucketObjectInfo } from "@/lib/utils";
import type {
	CreatePaymentMethodSchema,
	UpdatePaymentMethodSchema,
} from "@/schemas/payment-methods";
import { API, mockActionResponseFromAPI } from "../api";

export type UseUpdatePaymentMethodParams = Omit<
	UpdatePaymentMethodSchema,
	"image"
> & {
	image?: File | null;
};

export const useUpdatePaymentMethod = createMutation({
	mutationFn: async ({
		image: file,
		...params
	}: UseUpdatePaymentMethodParams) => {
		let image;

		if (file) {
			const key = generateStorageKey({
				prefix: "paymentMethods",
				file,
			});

			const url = await API.upload.getPresignedUrl({
				key,
			});

			await API.upload.uploadFile({
				file: file,
				url: url.data,
			});

			const { objectUrl } = getBucketObjectInfo({
				key,
				buckerName: env.NEXT_PUBLIC_S3_BUCKET_NAME,
			});

			image = objectUrl;
		}

		return mockActionResponseFromAPI(updatePaymentMethodAction)({
			...params,
			image,
		});
	},
});

export type UseAddPaymentMethodParams = Omit<
	CreatePaymentMethodSchema,
	"image"
> & {
	image?: File | null;
};

export const useAddPaymentMethod = createMutation({
	mutationFn: async ({ image: file, ...params }: UseAddPaymentMethodParams) => {
		let image;

		if (file) {
			const key = generateStorageKey({
				prefix: "paymentMethods",
				file,
			});

			const url = await API.upload.getPresignedUrl({
				key,
			});

			await API.upload.uploadFile({
				file: file,
				url: url.data,
			});

			const { objectUrl } = getBucketObjectInfo({
				key,
				buckerName: env.NEXT_PUBLIC_S3_BUCKET_NAME,
			});

			image = objectUrl;
		}

		return mockActionResponseFromAPI(createPaymentMethodAction)({
			...params,
			image,
		});
	},
});
