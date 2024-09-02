"use client";
import React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useMutateSearchParams } from "@/hooks/use-mutate-search-params";

export const ModalActionButton = React.forwardRef<
	HTMLButtonElement,
	Omit<ButtonProps, "onClick"> & {
		action: string;
	}
>(({ action, ...props }, ref) => {
	const { replaceActionRoute } = useMutateSearchParams();

	return (
		<Button {...props} ref={ref} onClick={() => replaceActionRoute(action)} />
	);
});

ModalActionButton.displayName = "ModalActionButton";
