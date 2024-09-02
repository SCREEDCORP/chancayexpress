import Link from "next/link";
import { redirect } from "next/navigation";

import { ROUTES } from "@/core/routes";
import { db } from "@/server/db";
import { ClientRevalidate } from "./client-revalidate";

export const dynamic = "force-dynamic";

export default async function ValidarPedidoPage({
	params,
}: {
	params: { requestId: string };
}) {
	const request = await db.productRequest.findUnique({
		where: { id: params.requestId },
		include: {
			method: true,
			product: {
				include: {
					user: true,
				},
			},
		},
	});

	if (!request) return redirect(ROUTES.home);

	if (request.status === "PENDING_APPROVAL") {
		return (
			<ClientRevalidate>
				<div className='pointer-events-none fixed inset-0 z-50 overflow-hidden bg-background/80'>
					<div className='grid h-full place-items-center gap-4'>
						<div className='flex flex-col items-center justify-center gap-2'>
							<div>
								<svg
									className='h-16 w-16 animate-spin'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									></path>
								</svg>
							</div>
							<h1 className='text-2xl font-bold'>
								El pedido esta siendo validado con el negocio...
							</h1>
						</div>
					</div>
				</div>
			</ClientRevalidate>
		);
	}

	if (request.status === "REJECTED") {
		return (
			<div className='fixed inset-0 z-50 overflow-hidden bg-background/80'>
				<div className='grid h-full place-items-center gap-4'>
					<div className='flex flex-col items-center justify-center gap-2'>
						<h1 className='text-2xl font-bold'>
							El negocio {request.product.user.name} ha rechazado el pedido.
						</h1>
						<Link href={ROUTES.home}>Volver a inicio</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='fixed inset-0 z-50 overflow-hidden bg-background/80'>
			<div className='grid h-full place-items-center gap-4'>
				<div className='flex flex-col items-center justify-center gap-2'>
					<h1 className='text-2xl font-bold'>
						El negocio ha aceptado su pedido y esta siendo procesado.
					</h1>
					<Link href={ROUTES.home}>Volver a inicio</Link>
				</div>
			</div>
		</div>
	);
}
