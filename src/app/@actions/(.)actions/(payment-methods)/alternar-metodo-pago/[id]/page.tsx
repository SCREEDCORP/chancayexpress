import { redirect } from "next/navigation";

import { FROM_ACTIONS_PARAM } from "@/core/constants";
import { ROUTES } from "@/core/routes";
import { db } from "@/server/db";
import { DeletePaymentMethodModal } from "./modal";

export const dynamic = "force-dynamic";

export default async function DeletePaymentMethodPage({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: Record<string, string>;
}) {
	const paymentMethod = await db.paymentMethod.findUnique({
		where: { id: +params.id },
	});

	if (!paymentMethod)
		return redirect(searchParams[FROM_ACTIONS_PARAM] ?? ROUTES.home);

	return (
		<DeletePaymentMethodModal
			id={paymentMethod.id}
			type={paymentMethod.type}
			status={paymentMethod.status}
		/>
	);
}
