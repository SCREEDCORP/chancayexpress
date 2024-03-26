import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import type { UpdateUser } from "@/core/api/user";
import { db } from "@/server/db";
import type { ZodInferSchema } from "@/types";

const updateSchema = z.object<ZodInferSchema<UpdateUser>>({
	name: z.string().nullable().optional(),
	description: z.string().nullable().optional(),
	direction: z.string().nullable().optional(),
	phone: z.string().nullable().optional(),
	image: z.string().nullable().optional(),
});

async function updateUser(
	req: NextRequest,
	ctx: { params: { userId: string } },
) {
	try {
		const { params } = ctx;

		const body = await req.json();
		const parse = updateSchema.safeParse(body);

		if (!parse.success) {
			return NextResponse.json(
				{
					message: "Peticion invalida",
					errors: parse.error.issues,
				},
				{ status: 400 },
			);
		}

		const user = await db.user.findUnique({
			where: {
				id: params.userId,
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

		const { data } = parse;

		const updatedUser = await db.user.update({
			where: {
				id: params.userId,
			},
			data,
		});

		return NextResponse.json(
			{
				message: "Solicitud exitosa",
				data: updatedUser,
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

export { updateUser as PATCH };
