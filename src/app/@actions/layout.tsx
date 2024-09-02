"use client";
import { usePathname } from "next/navigation";

import { BASE_ACTIONS_ROUTE } from "@/core/actions-routes";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return pathname.startsWith(BASE_ACTIONS_ROUTE) ? children : null;
}
