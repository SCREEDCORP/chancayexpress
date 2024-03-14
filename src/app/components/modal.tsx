import Link from "next/link";
import { MdClose } from "react-icons/md";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type ModalProps = {
	itemId: string | null;
	onClose: () => void;
};

export function Modal({ itemId, onClose }: ModalProps) {
	return (
		<div
			className={`fixed inset-0 z-50 m-auto flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${itemId ? "" : "hidden"}`}
		>
			<div className='relative h-auto w-full max-w-md p-4'>
				<div className='relative rounded-lg bg-white shadow dark:bg-slate-900 dark:shadow-gray-800'>
					<div className='flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700'>
						<h5 className='ml-16 text-xl font-semibold'>Realiza tu pedido</h5>
						<button
							type='button'
							className='items-right ms-auto inline-flex rounded-lg bg-transparent p-1.5 text-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
						>
							<MdClose onClick={() => onClose()} />
						</button>
					</div>
					<div className='p-6'>
						<form className='text-start'>
							<div className='grid grid-cols-1'>
								<div className='mb-4'>
									<label className='font-semibold'>Cantidad de Pedido:</label>
									<input
										name='quantity'
										id='number2'
										type='number'
										className='form-input mb-3 mt-3 h-10 w-full rounded-full border border-gray-200 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-violet-600 focus:ring-0 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-violet-600'
										placeholder='0'
									/>
									<label className='font-semibold'>
										Envia un mensaje adicional:
									</label>
									<Textarea
										placeholder='Carne cocida en 3/4'
										className='mt-2 resize-none'
									/>
								</div>
							</div>
						</form>

						<div className='border-t pt-4 dark:border-t-gray-800'>
							<div className='flex justify-between'>
								<p className='text-sm font-semibold'> Costo del pedido:</p>
								<p className='text-sm font-semibold text-violet-600'>
									{" "}
									S/. 45{" "}
								</p>
							</div>
							<div className='mt-1 flex justify-between'>
								<p className='text-sm font-semibold'> Costo de Envio:</p>
								<p className='text-sm font-semibold text-violet-600'>
									{" "}
									S/. 12{" "}
								</p>
							</div>
							<div className='mt-1 flex justify-between'>
								<p className='text-sm font-semibold'> Total :</p>
								<p className='text-sm font-semibold text-violet-600'>
									{" "}
									S/. 47{" "}
								</p>
							</div>
						</div>

						<div className='mt-4'>
							<Link
								href='#'
								className='btn w-full rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
							>
								<i className='mdi mdi-cash'></i> Realizar Pago
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
