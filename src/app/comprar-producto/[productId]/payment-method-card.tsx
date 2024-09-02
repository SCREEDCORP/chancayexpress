"use client";
import { type PaymentMethod } from "@prisma/client";
import { CheckCircleIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/app/components/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentMethodIconMap } from "@/core/configs";
import { paymentMethodNameMap } from "@/core/constants";
import { useProductContext } from "./context";

export function PaymentMethodCard({ methods }: { methods: PaymentMethod[] }) {
	const { paymentMethodId, setPaymentMethodId } = useProductContext();

	return (
		<Card>
			<CardHeader className='flex items-center gap-4'>
				<CheckCircleIcon className='text-primary' />
				<h5 className='text-2xl font-bold'>Metodo de pago</h5>
			</CardHeader>
			<CardContent className='flex items-center justify-between'>
				<div>Metodos disponibles:</div>
				<div>
					<RadioGroup
						defaultValue={paymentMethodId?.toString()}
						onValueChange={v => setPaymentMethodId(+v)}
					>
						{methods.length ? (
							methods.map(method => (
								<Label
									key={method.type}
									htmlFor={method.type}
									className='block'
								>
									<Card>
										<CardHeader className='flex items-center justify-between gap-2'>
											<div className='flex items-center gap-2'>
												{paymentMethodIconMap[method.type]}
												<span>{paymentMethodNameMap[method.type]}</span>
											</div>
											<div>
												<RadioGroupItem
													value={method.id.toString()}
													id={method.type}
												/>
											</div>
										</CardHeader>
									</Card>
								</Label>
							))
						) : (
							<div>El negocio no tiene metodos de pago</div>
						)}
					</RadioGroup>
				</div>
			</CardContent>
		</Card>
	);
}
