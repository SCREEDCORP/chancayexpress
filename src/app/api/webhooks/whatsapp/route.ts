import type { NextRequest } from "next/server";

import { env } from "@/env.mjs";
import { db } from "@/server/db";
import { sendClientRequestStatusMessage } from "@/server/ws";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	const verifyToken = req.nextUrl.searchParams.get("hub.verify_token");
	const challenge = req.nextUrl.searchParams.get("hub.challenge");

	if (verifyToken !== env.WHATSAPP_MESSAGES_WEBHOOK_TOKEN) {
		return new Response(undefined, { status: 403 });
	}

	return new Response(challenge, { status: 200 });
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		const desiredEvent = body as TemplateResponse;

		const field = desiredEvent?.entry[0]?.changes[0]?.field;
		const message = desiredEvent?.entry[0]?.changes[0]?.value?.messages[0];
		const whatsappMessageId = message?.context?.id;

		// manejar el evento de whatsapp que queremos
		if (
			desiredEvent?.object === "whatsapp_business_account" &&
			field === "messages" &&
			whatsappMessageId &&
			message
		) {
			console.log(
				"Se ha recibido un evento deseado de Whatsapp: ",
				desiredEvent,
			);

			const request = await db.productRequest.findUnique({
				where: { whatsappMessageId },
				include: {
					product: {
						select: {
							name: true,
							user: {
								select: {
									name: true,
								},
							},
						},
					},
				},
			});

			if (request) {
				console.log("El mensage de whatsapp es del pedido: ", request);

				if (request.status !== "PENDING_APPROVAL") {
					console.error("El pedido ya ha sido respondido");

					return new Response(undefined, { status: 200 });
				}
				const storeResponse = message.button.text;

				// actualizar el pedido en la base de datos
				if (storeResponse === "Si" || storeResponse === "No") {
					const status = storeResponse === "Si" ? "INACTIVE" : "REJECTED";

					await db.productRequest.update({
						where: { id: request.id },
						data: {
							status,
						},
					});
					await sendClientRequestStatusMessage({
						recipient: request.clientPhone,
						product: `${request.quantity} x ${request.product.name}`,
						productRequestStatus: status,
						store: request.product.user.name ?? "",
					});
				} else {
					console.error("El usuario ha seleccionado una respuesta invalida");
				}
			}
		}

		return new Response(undefined, { status: 200 });
	} catch (error) {
		console.error(error);

		return new Response(undefined, { status: 500 });
	}
}

type TemplateResponse = {
	object: "whatsapp_business_account";
	entry: [
		{
			id: string;
			changes: [
				{
					value: {
						messaging_product: "whatsapp";
						metadata: {
							display_phone_number: string;
							phone_number_id: string;
						};
						contacts: [{ profile: { name: string }; wa_id: string }];
						messages: [
							{
								context: {
									from: string;
									// Este es el id que conectamos a la hora de enviar el mensaje al negocio
									id: string;
								};
								from: string;
								id: string;
								// "1725261477"
								timestamp: string;
								type: "button";
								// button: { payload: "Si"; text: "Si" };
								button: { payload: string; text: string };
							},
						];
					};
					field: string;
				},
			];
		},
	];
};
