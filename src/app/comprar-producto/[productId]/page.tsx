import Image from "next/image";
import { redirect } from "next/navigation";

import { Card, CardContent, CardHeader } from "@/app/components/card";
import { formatPrice } from "@/lib/utils";
import { db } from "@/server/db";
import { AddressCard } from "./address-card";
import { ProductProvider } from "./context";
import { PayButton } from "./pay-button";
import { PaymentMethodCard } from "./payment-method-card";

export const dynamic = "force-dynamic";

export default async function BuyProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await db.product.findUnique({
		where: { id: params.productId },
		include: {
			user: {
				include: {
					paymentMethods: {
						where: {
							status: true,
						},
					},
				},
			},
		},
	});

	if (!product) return redirect("/");

	return (
		<>
			{/* <Navbar /> */}
			<div className='container relative overflow-hidden'>
				<ProductProvider validPaymentMethods={product.user.paymentMethods}>
					<main className='grid gap-2 md:grid-cols-12'>
						<section className='flex flex-col gap-2 md:col-span-7'>
							<AddressCard />
							<Card>
								<CardHeader className='flex items-center gap-4'>
									<Image
										src={product.user.image ?? "/images/avatar/3.jpg"}
										alt=''
										width={40}
										height={40}
									/>
									<h5 className='text-2xl font-bold'>{product.user.name}</h5>
								</CardHeader>
							</Card>
							<PaymentMethodCard methods={product.user.paymentMethods} />
						</section>
						<section className='flex flex-col gap-2 md:col-span-5'>
							<Card>
								<CardHeader>
									<h5 className='text-2xl font-bold'>Resumen</h5>
								</CardHeader>
								<CardContent>
									<div className='flex items-center justify-between gap-2'>
										<span>Costo de productos:</span>
										<span>{formatPrice(product.costInCents)}</span>
									</div>
									<div className='flex items-center justify-between gap-2'>
										<span>Costo de envio:</span>
										<span>{formatPrice(0)}</span>
									</div>
									<div className='flex items-center justify-between gap-2'>
										<span>Total:</span>
										<span>{formatPrice(product.costInCents)}</span>
									</div>
								</CardContent>
							</Card>
							<div>
								<PayButton productId={product.id} />
							</div>
						</section>
					</main>
				</ProductProvider>
			</div>
		</>
	);
}
