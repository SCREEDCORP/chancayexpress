import type {
	BindArgsValidationErrors,
	SafeActionFn,
	SafeActionResult,
	ValidationErrors,
} from "next-safe-action";
import type {
	InferIn,
	InferInArray,
	Schema,
} from "next-safe-action/adapters/types";

import { UploadClass } from "./upload";
import { UserClass } from "./user";

export type APIResponse<D> = {
	data: D;
	message: string;
};
export type SimpleAPIResponse = {
	message: string;
};
export type ActionResponse<T = undefined> =
	| {
			ok: true;
			data?: T;
	  }
	| {
			ok: false;
			errorMsg: string;
	  };

export function mockActionResponseFromAPI<
	S extends Schema | undefined,
	BAS extends readonly Schema[],
	CVE = ValidationErrors<S>,
	CBAVE = BindArgsValidationErrors<BAS>,
	Data = unknown,
>(action: SafeActionFn<string | null | undefined, S, BAS, CVE, CBAVE, Data>) {
	return async function (
		...clientInputs: [
			...bindArgsInputs: InferInArray<BAS>,
			input: S extends Schema ? InferIn<S> : void,
		]
	): Promise<Data extends undefined ? SimpleAPIResponse : APIResponse<Data>> {
		const res = (await action(...clientInputs)) as SafeActionResult<
			string | null | undefined,
			S,
			BAS,
			CVE,
			CBAVE,
			Data,
			unknown
		>;

		if (res?.serverError) throw new Error(res.serverError);
		if (res?.validationErrors) {
			console.error(res.validationErrors);
			throw new Error("Error de validacion");
		}

		return {
			message: "Solicitud exitosa",
			data: res.data,
		} as Data extends undefined ? SimpleAPIResponse : APIResponse<Data>;
	};
}

class APIClass {
	get upload() {
		return new UploadClass();
	}

	get users() {
		return new UserClass();
	}
}

export const API = new APIClass();
