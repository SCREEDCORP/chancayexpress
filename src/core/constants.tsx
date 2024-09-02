import { PaymentMethodType } from "@prisma/client";
import { DollarSignIcon } from "lucide-react";

import { PlinIcon, YapeIcon } from "@/app/components/icons";

export const paymentMethodIconMap: Record<PaymentMethodType, React.ReactNode> =
	{
		[PaymentMethodType.EFECTIVO]: <DollarSignIcon className='h-8 w-8' />,
		[PaymentMethodType.PLIN]: <PlinIcon className='h-8 w-8' />,
		[PaymentMethodType.YAPE]: <YapeIcon className='h-8 w-8' />,
	};

export const paymentMethodNameMap: Record<PaymentMethodType, string> = {
	[PaymentMethodType.EFECTIVO]: "Efectivo",
	[PaymentMethodType.PLIN]: "Plin",
	[PaymentMethodType.YAPE]: "Yape",
};

export const paymentMethodsTypes = Object.keys(
	PaymentMethodType,
) as PaymentMethodType[];

export const FROM_ACTIONS_PARAM = "from" as const;
