import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { FROM_ACTIONS_PARAM } from "@/core/constants";
import { ROUTES } from "@/core/routes";

export function useActionModal() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [open, setOpen] = React.useState(true);

	const redirect = () => {
		router.replace(searchParams.get(FROM_ACTIONS_PARAM) ?? ROUTES.home, {
			scroll: false,
		});
	};

	const onOpenChange = (bool: boolean) => {
		setOpen(bool);
		if (!bool) redirect();
	};

	React.useEffect(() => {
		return () => setOpen(true);
	}, []);

	return {
		open,
		onOpenChange,
	};
}
