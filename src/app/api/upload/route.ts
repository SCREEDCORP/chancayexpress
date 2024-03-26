import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { getBucketSignedUrl } from "@/lib/s3";

const schema = z.object({
	key: z.string(),
	privateFile: z.literal(true).optional(),
});

async function uploadToS3(req: NextRequest) {
	try {
		const body = await req.json();
		const parsedBody = schema.safeParse(body);

		if (!parsedBody.success) {
			console.error(parsedBody.error.issues);

			return NextResponse.json(
				{
					message: "Peticion invalida",
					errors: parsedBody.error.issues,
				},
				{
					status: 400,
				},
			);
		}

		const { key, privateFile } = parsedBody.data;

		const signedUrl = await getBucketSignedUrl({
			key,
			privateFile,
		});

		return NextResponse.json(
			{
				data: signedUrl,
				message: "Solicitud exitosa",
			},
			{
				status: 200,
			},
		);
	} catch (error: any) {
		console.error(error);

		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 },
		);
	}
}

export { uploadToS3 as POST };
