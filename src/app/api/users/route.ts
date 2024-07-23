import { UserType, type User } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { db } from "@/server/db";
import type { ZodInferSchema } from "@/types";

const createSchema = z.object<
	ZodInferSchema<Omit<User, "id" | "createdAt" | "updatedAt" | "emailVerified">>
>({
	type: z.nativeEnum(UserType),
	email: z
		.string()
		.email()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	name: z
		.string()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	nameHandler: z
		.string()
		.regex(
			/^[a-zA-Z0-9_]*$/,
			"Solo se permiten letras, numeros y guiones bajos",
		)
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	description: z
		.string()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	direction: z
		.string()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	phone: z
		.string()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
	image: z
		.string()
		.transform(v => (v === "null" ? null : v))
		.nullable(),
});

async function createUser(req: NextRequest) {
	try {
		const formData = await req.formData();

		const body = Object.fromEntries(formData.entries());

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

		const { data } = parse;

		const user = await db.user.create({
			data: {
				...data,
				nameHandler: data.nameHandler?.toLowerCase(),
			},
		});

		console.log({ user });

		return NextResponse.json(
			{
				message: "Solicitud exitosa",
			},
			{ status: 201 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message },
			{
				status: 500,
			},
		);
	}
}

async function getUsers(req: NextRequest) {
	try {
		const users = await db.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		return NextResponse.json({ data: users, message: "Solicitud exitosa" });
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 },
		);
	}
}

export { getUsers as GET, createUser as POST };
