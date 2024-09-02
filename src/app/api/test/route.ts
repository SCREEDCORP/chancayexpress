import { type NextRequest, NextResponse } from "next/server";

import {
	sendAffiliationMessage,
	sendTemplateMessage,
	sendWhatsappMessage,
} from "@/server/ws";

export async function POST(req: NextRequest) {
	const recipient = req.nextUrl.searchParams.get("recipient");

	if (!recipient) {
		return NextResponse.json(
			{ message: "Recipient is required" },
			{ status: 400 },
		);
	}

	const res = await sendTemplateMessage(recipient);
	// const res = await sendWhatsappMessage({
	// 	recipient,
	// 	deliveryAddress: "Av. Juan XXIII, 1",
	// 	productDescription: "Product description",
	// 	paymentMethod: "EFECTIVO",
	// 	totalPrice: 1000,
	// });

	console.log(JSON.stringify(res));

	return NextResponse.json({ message: "OK" });
}
