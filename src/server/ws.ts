import type { PaymentMethodType } from "@prisma/client";

import { env } from "@/env.mjs";
import { formatPrice } from "@/lib/utils";

const endpoint = `https://graph.facebook.com/${env.CLOUD_API_VERSION}/${env.SENDER_NUMBER}/messages`;

export async function sendTemplateMessage(recipient: string) {
	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${env.CLOUD_API_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			messaging_product: "whatsapp",
			to: recipient,
			type: "template",
			template: { name: "negocio", language: { code: "es" } },
		}),
	});

	return res.json();
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
