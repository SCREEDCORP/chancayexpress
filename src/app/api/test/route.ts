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

	console.log(JSON.stringify(res));

	return NextResponse.json({ message: "OK" });
}
