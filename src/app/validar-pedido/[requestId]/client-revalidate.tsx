"use client";
import { useRouter } from "next/navigation";
import React from "react";

export function ClientRevalidate({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	// React.useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		router.refresh();
	// 		console.log("refresh");
	// 	}, 3000);

	// 	return () => clearInterval(timer);
	// }, [router]);

	return <>{children}</>;
}
