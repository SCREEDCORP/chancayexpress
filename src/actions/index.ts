import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
	ActionValidationError,
	createSafeActionClient,
	DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

// docs -> https://www.prisma.io/docs/orm/reference/error-reference#prisma-client-query-engine
export const prismaKnownRequestErrorMap = {
	P2002: "El registro ya existe",
	P2003:
		"El registro no puede ser eliminado debido a que tiene otros asociados",
} satisfies Record<string, string>;

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
	handleReturnedServerError(e) {
		if (e.name === "PrismaClientKnownRequestError") {
			const castedError = e as PrismaClientKnownRequestError;

			console.error(castedError.message);

			const errorMsg = prismaKnownRequestErrorMap[
				castedError.code as keyof object
			] as string | undefined;

			if (errorMsg) {
				return errorMsg;
			}

			return `Codigo de error ${castedError.code}`;
		}

		if (e instanceof ActionValidationError) {
			console.error(e);
			return "Error de validacion";
		}
		if (e instanceof ActionError) {
			console.error(e);
			return e.message;
		}

		if (e instanceof Error) {
			return "Se ha producido un error interno en el servidor";
		}

		return DEFAULT_SERVER_ERROR_MESSAGE;
	},
	throwValidationErrors: true,
});
