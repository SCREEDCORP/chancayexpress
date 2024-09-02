import { PaymentMethodType } from "@prisma/client";
import { DollarSign } from "lucide-react";

import { PlinIcon, YapeIcon } from "@/app/components/icons";

export const paymentMethodIconMap: Record<PaymentMethodType, React.ReactNode> =
	{
		[PaymentMethodType.EFECTIVO]: <DollarSign className='h-8 w-8' />,
		[PaymentMethodType.PLIN]: <PlinIcon className='h-8 w-8' />,
		[PaymentMethodType.YAPE]: <YapeIcon className='h-8 w-8' />,
	};
