import type { QueryClientConfig } from "@tanstack/react-query";

export const reactQueryConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
		mutations: {
			// react-query-kit use this field for middleware purposes
			// cannot redeclare with declare module
			// use: [mutationMiddleware],
		},
	},
} as QueryClientConfig;
