import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { env } from "../env.mjs";
import { s3Client } from "../server/s3";

export type GetBucketSignedUrlParams = {
	key: string;
	privateFile?: true;
};

/**
 * @example getBucketSignedUrl("..key/...of/..object") // -> stored in public/..key/...of/..object by default
 */
export async function getBucketSignedUrl({
	key,
	privateFile,
}: GetBucketSignedUrlParams) {
	const parsedKey = key.replaceAll(" ", "_");

	const command = new PutObjectCommand({
		Bucket: env.S3_BUCKET_NAME,
		Key: privateFile ? "" : "public/" + parsedKey,
	});

	return getSignedUrl(s3Client, command, {
		expiresIn: 3600,
	});
}

export class S3Object {
	private key: string;
	private privateFile?: true;
	private objectUrl: string;
	private signedUrl: string | null;
	private isUploaded: boolean;
	private file: File | Blob;

	constructor({
		key,
		privateFile,
		file,
	}: Required<GetBucketSignedUrlParams> & { file: File | Blob }) {
		const parsedKey = key.replaceAll(" ", "_");

		this.key = privateFile ? "" : "public/" + parsedKey;
		this.privateFile = privateFile;
		this.objectUrl = `https://${env.S3_BUCKET_NAME}.s3.sa-east-1.amazonaws.com/${this.key}`;
		this.signedUrl = null;
		this.isUploaded = false;
		this.file = file;
	}

	async fetchSignedUrl() {
		if (this.isUploaded)
			throw new S3ObjectUploadError("The instance already uploaded the file");
		if (this.signedUrl)
			throw new S3ObjectSignedUrlError("Signed URL is already fetched.");

		try {
			const command = new PutObjectCommand({
				Bucket: env.S3_BUCKET_NAME,
				Key: this.key,
			});

			const newSignedUrl = await getSignedUrl(s3Client, command, {
				expiresIn: 3600,
			});

			this.signedUrl = newSignedUrl;
		} catch (error) {
			console.error(error);

			throw new S3ObjectSignedUrlError(
				"An error occured during the fetch of signed url.",
			);
		}
	}

	async uploadFile() {
		if (this.isUploaded)
			throw new S3ObjectUploadError("The instance already uploaded the file");
		if (!this.signedUrl)
			throw new S3ObjectSignedUrlError("The instance has not a signed URL.");

		try {
			const res = await fetch(this.signedUrl, {
				method: "PUT",
				body: this.file,
			});

			if (!res.ok) {
				console.log(await res.json());
				throw new S3ObjectUploadObjectError("Upload response is not ok.");
			}

			this.isUploaded = true;

			return res.ok;
		} catch (error) {
			console.error(error);

			if (error instanceof S3ObjectUploadObjectError) {
				throw error;
			}

			throw new S3ObjectUploadObjectError(
				"An error occured during the upload of the object.",
			);
		}
	}

	getObjectUrl() {
		if (!this.isUploaded)
			throw new S3ObjectNoUploadedObjectError(
				"The object has not been uploaded yet.",
			);

		return this.objectUrl;
	}

	getKey() {
		return this.key;
	}
}

class S3ObjectUploadError extends Error {
	constructor(message: string) {
		super();
		this.name = "S3ObjectUploadError";
		this.message = message;
	}
}

class S3ObjectSignedUrlError extends Error {
	constructor(message: string) {
		super();
		this.name = "S3ObjectSignedUrlExistsError";
		this.message = message;
	}
}

class S3ObjectUploadObjectError extends Error {
	constructor(message: string) {
		super();
		this.name = "S3ObjectUploadObjectError";
		this.message = message;
	}
}

class S3ObjectNoUploadedObjectError extends Error {
	constructor(message: string) {
		super();
		this.name = "S3ObjectNoUploadedObjectError";
		this.message = message;
	}
}
