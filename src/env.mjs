import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		DATABASE_URL: z.string(),
		CE_AWS_ACCESS_KEY: z.string(),
		CE_AWS_SECRET_ACCESS_KEY: z.string(),
		S3_BUCKET_NAME: z.string(),
		M4D_APP_ID: z.string(),
		M4D_APP_SECRET: z.string(),
		WA_BUSINESS_ACCOUNT_ID: z.string(),
		CLOUD_API_VERSION: z.string(),
		CLOUD_API_ACCESS_TOKEN: z.string(),
		SENDER_NUMBER: z.number({ coerce: true }),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
		NEXT_PUBLIC_S3_BUCKET_NAME: z.string(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		// NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
		// DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
		DATABASE_URL: process.env.DATABASE_URL,
		CE_AWS_ACCESS_KEY: process.env.CE_AWS_ACCESS_KEY,
		CE_AWS_SECRET_ACCESS_KEY: process.env.CE_AWS_SECRET_ACCESS_KEY,
		S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

		NEXT_PUBLIC_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,

		M4D_APP_ID: process.env.M4D_APP_ID,
		M4D_APP_SECRET: process.env.M4D_APP_SECRET,
		WA_BUSINESS_ACCOUNT_ID: process.env.WA_BUSINESS_ACCOUNT_ID,
		CLOUD_API_VERSION: process.env.CLOUD_API_VERSION,
		CLOUD_API_ACCESS_TOKEN: process.env.CLOUD_API_ACCESS_TOKEN,
		SENDER_NUMBER: process.env.SENDER_NUMBER,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
	 * This is especially useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
