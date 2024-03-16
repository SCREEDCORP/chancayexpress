import type { Product } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { db } from "@/server/db";
import type { ZodInferSchema } from "@/types";

const createSchema = z.object<
	ZodInferSchema<
		Omit<
			Product,
			"id" | "createdAt" | "updatedAt" | "status" | "image" | "userId"
		> & {
			// image: Blob;
		}
	>
>({
	costInCents: z.number({ coerce: true }),
	description: z
		.string()
		.transform(f => (f === "null" ? null : f))
		.nullable(),
	// image: z.instanceof(Blob),
	name: z.string(),
});

async function createProduct(
	req: NextRequest,
	ctx: { params: { userId: string } },
) {
	try {
		const { params } = ctx;

		const body = await req.json();
		const parse = createSchema.safeParse(body);

		if (!parse.success) {
			console.error(parse.error.issues);

			return NextResponse.json(
				{
					message: "Peticion invalida",
					errors: parse.error.issues,
				},
				{ status: 400 },
			);
		}

		const user = await db.user.findUnique({
			where: { id: params.userId },
		});

		if (!user) {
			return NextResponse.json(
				{
					message: "El usuario no existe",
				},
				{ status: 400 },
			);
		}

		const product = await db.product.create({
			data: {
				...parse.data,
				image: null,
				user: {
					connect: {
						id: params.userId,
					},
				},
			},
		});

		return NextResponse.json(
			{
				message: "Solicitud exitosa",
			},
			{ status: 201 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			},
		);
	}
}

async function getUserByIdWithProducts(
	req: NextRequest,
	ctx: { params: { userId: string } },
) {
	try {
		const { params } = ctx;

		const user = await db.user.findUnique({
			where: { id: params.userId },
			include: {
				products: {
					where: {
						status: true,
					},
				},
			},
		});

		if (!user) {
			return NextResponse.json(
				{
					message: "El usuario no existe",
				},
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{
				data: user,
				message: "Solicitud exitosa",
			},
			{ status: 200 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 },
		);
	}
}

export { createProduct as POST, getUserByIdWithProducts as GET };
