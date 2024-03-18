import type { z } from "zod";

export type SuccessAPIResponse<T> = {
	message: string;
	data: T;
	errors: undefined;
};
export type FailedAPIResponse = {
	message: string;
	data: undefined;
	errors?: z.ZodIssue[];
};

export type SuccessAPIResponseSimple = {
	message: string;
	errors: undefined;
};
export type FailedAPIResponseSimple = {
	message: string;
	errors?: z.ZodIssue[];
};

export type APIResponse<T> = SuccessAPIResponse<T> | FailedAPIResponse;
export type APIResponseSimple =
	| SuccessAPIResponseSimple
	| FailedAPIResponseSimple;

export type RequestWithAccessToken<T = never> = {
	data: T;
	accessToken: string;
};
