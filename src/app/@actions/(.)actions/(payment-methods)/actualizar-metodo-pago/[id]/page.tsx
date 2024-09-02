import { redirect } from "next/navigation";

import { FROM_ACTIONS_PARAM } from "@/core/constants";
import { ROUTES } from "@/core/routes";
import { db } from "@/server/db";
import { UpdatePaymentMethodModal } from "./modal";

export const dynamic = "force-dynamic";

export default async function UpdatePaymentMethodPage({
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

	if (paymentMethod.type === "EFECTIVO") {
		return redirect(searchParams[FROM_ACTIONS_PARAM] ?? ROUTES.home);
	}

	return (
		<UpdatePaymentMethodModal
			id={paymentMethod.id}
			image={paymentMethod.image}
			type={paymentMethod.type}
		/>
	);
}
