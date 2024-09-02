import type { PaymentMethodType, ProductRequestStatus } from "@prisma/client";

import { env } from "@/env.mjs";
import { formatPrice } from "@/lib/utils";

const endpoint = `https://graph.facebook.com/${env.CLOUD_API_VERSION}/${env.SENDER_NUMBER}/messages`;

async function fetchWhatsappApi(body: object) {
	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${env.CLOUD_API_ACCESS_TOKEN}`,
		},
		body: JSON.stringify(body),
	});

	const responseBody = await res.json();

	if (!res.ok) {
		const casted = responseBody as ErrorMessageSent;

		throw new Error(casted.error.message);
	}

	return responseBody as SuccessMessageSent;
}

export function sendTemplateMessage(recipient: string) {
	return fetchWhatsappApi({
		messaging_product: "whatsapp",
		to: recipient,
		type: "template",
		template: { name: "negocio", language: { code: "es" } },
	});
}

export function sendStoreConfirmationMessage({
	recipient,
	product,
	address,
	paymentMethod,
	totalPriceInCents,
	clientPhone,
}: {
	recipient: string;
	product: string;
	address: string;
	paymentMethod: PaymentMethodType;
	totalPriceInCents: number;
	clientPhone: string;
}) {
	return fetchWhatsappApi({
		messaging_product: "whatsapp",
		to: recipient,
		type: "template",
		template: {
			name: "negocio_confirmacion",
			language: { code: "es" },
			components: [
				{
					type: "body",
					parameters: [
						{ type: "text", text: product },
						{ type: "text", text: address },
						{ type: "text", text: paymentMethod },
						{ type: "text", text: totalPriceInCents },
						{ type: "text", text: clientPhone },
					],
				},
			],
		},
	});
}

const productRequestStatusMap: Record<
	Exclude<ProductRequestStatus, "IN_CHICKEN" | "TO_DELIVER">,
	string
> = {
	PENDING_APPROVAL: "PENDIENTE DE APROBACION",
	REJECTED: "RECHAZADO",
	INACTIVE: "APROBADO",
};

export function sendClientRequestStatusMessage({
	product,
	productRequestStatus,
	store,
	recipient,
}: {
	recipient: string;
	store: string;
	product: string;
	productRequestStatus: Exclude<
		ProductRequestStatus,
		"IN_CHICKEN" | "TO_DELIVER"
	>;
}) {
	return fetchWhatsappApi({
		messaging_product: "whatsapp",
		to: recipient,
		type: "template",
		template: {
			name: "cliente_actualizacion_pedido",
			language: { code: "es" },
			components: [
				{
					type: "body",
					parameters: [
						{ type: "text", text: store },
						{
							type: "text",
							text: productRequestStatusMap[productRequestStatus],
						},
						{ type: "text", text: product },
					],
				},
			],
		},
	});
}

export async function sendAffiliationMessage(recipient: string) {
	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${env.CLOUD_API_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			messaging_product: "whatsapp",
			recipient_type: "individual",
			to: recipient,
			type: "text",
			text: {
				body: "Hola, te saludamos de parte de ChancayExpress. Si has solicitado una afiliación, por favor confirma respondiendo a este mensaje.",
			},
		}),
	});

	return res.json();
}

export async function sendWhatsappMessage({
	recipient,
	deliveryAddress,
	productDescription,
	totalPrice,
	paymentMethod,
}: {
	recipient: string;
	productDescription: string;
	deliveryAddress: string;
	totalPrice: number;
	paymentMethod: PaymentMethodType;
}) {
	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${env.CLOUD_API_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			messaging_product: "whatsapp",
			recipient_type: "individual",
			to: recipient,
			type: "interactive",
			interactive: {
				type: "button",
				body: {
					text: `Se ha hecho un pedido de: ${productDescription}\nPara entregar a la direccion: ${deliveryAddress}\nMetodo de pago: ${paymentMethod}\nPrecio total: ${formatPrice(totalPrice)}\nVerificar pago:`,
				},
				action: {
					buttons: [
						{
							type: "reply",
							reply: {
								id: "true",
								title: "Si",
							},
						},
						{
							type: "reply",
							reply: {
								id: "false",
								title: "No",
							},
						},
					],
				},
			},
		}),
	});

	const responseBody = await res.json();

	if (!res.ok) {
		const casted = responseBody as ErrorMessageSent;

		throw new Error(casted.error.message);
	}

	return responseBody as SuccessMessageSent;
}

type SuccessMessageSent = {
	messaging_product: "whatsapp";
	contacts: [{ input: string; wa_id: string }];
	messages: [{ id: string }];
};
type ErrorMessageSent = {
	error: {
		message: string;
		type: string;
		code: number;
		error_data: {
			messaging_product: "whatsapp";
			details: string;
		};
		fbtrace_id: string;
	};
};
