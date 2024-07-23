import { S3Client } from "@aws-sdk/client-s3";

import { env } from "@/env.mjs";

export const s3Client = new S3Client({
	region: "sa-east-1",
	credentials: {
		accessKeyId: env.CE_AWS_ACCESS_KEY,
		secretAccessKey: env.CE_AWS_SECRET_ACCESS_KEY,
	},
});
