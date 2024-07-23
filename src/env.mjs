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
		AWS_ACCESS_KEY: process.env.CE_AWS_ACCESS_KEY,
		CE_AWS_ACCESS_KEY: process.env.CE_AWS_ACCESS_KEY,
		AWS_SECRET_ACCESS_KEY: process.env.CE_AWS_SECRET_ACCESS_KEY,
		CE_AWS_SECRET_ACCESS_KEY: process.env.CE_AWS_SECRET_ACCESS_KEY,
		S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

		NEXT_PUBLIC_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
	 * This is especially useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
