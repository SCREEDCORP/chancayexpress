import { redirect } from "next/navigation";

import { FROM_ACTIONS_PARAM } from "@/core/constants";
import { ROUTES } from "@/core/routes";

export const dynamic = "force-dynamic";

export default function CatchAll({
	searchParams,
}: {
	searchParams: Record<string, string>;
}) {
	return redirect(searchParams[FROM_ACTIONS_PARAM] ?? ROUTES.home);
}
