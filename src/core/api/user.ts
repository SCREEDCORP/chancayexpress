import type { User } from "@prisma/client";

import type { APIResponse } from "@/types/api";

export type UpdateUser = Partial<
	Omit<
		User,
		| "id"
		| "createdAt"
		| "updatedAt"
		| "emailVerified"
		| "type"
		| "nameHandler"
		| "email"
	>
>;

export class UserClass {
	async update({
		id,
		data,
	}: {
		id: string;
		data: UpdateUser;
	}): Promise<APIResponse<User>> {
		const response = await fetch(`/api/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const json = await response.json();

			throw new Error(json.message);
		}

		return response.json();
	}
}
