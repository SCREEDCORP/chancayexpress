import type { GetBucketSignedUrlParams } from "@/lib/s3";
import type { APIResponse, APIResponseSimple } from "@/types/api";

export class UploadClass {
	async getPresignedUrl({
		key,
		privateFile,
	}: GetBucketSignedUrlParams): Promise<APIResponse<string>> {
		const res = await fetch("/api/upload", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ key, privateFile }),
		});

		if (!res.ok) {
			const json = (await res.json()) as APIResponse<undefined>;

			throw new Error(json.message);
		}

		return res.json();
	}

	async uploadFile({
		file,
		url,
	}: {
		file: File;
		/**
		 * The presigned url to upload the file
		 */
		url: string;
	}): Promise<APIResponseSimple> {
		const res = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": file.type,
			},
			body: file,
		});

		if (!res.ok) {
			const json = (await res.json()) as APIResponse<undefined>;

			throw new Error(json.message);
		}

		return res.json();
	}
}
