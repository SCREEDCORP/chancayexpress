"use client";
import { Card, CardContent, CardHeader } from "@/app/components/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProductContext } from "./context";

export function AddressCard() {
	const { address, setAddress, phone, setPhone } = useProductContext();

	return (
		<Card>
			<CardHeader>
				<h5 className='text-2xl font-bold'>Direccion de entrega</h5>
			</CardHeader>
			<CardContent>
				<Label htmlFor='address'>Direccion</Label>
				<Input
					placeholder='Av. Los Incas 123, Chancay'
					className='border-primary'
					value={address}
					onChange={e => setAddress(e.target.value)}
				/>
				<Label htmlFor='phone'>Numero de telefono</Label>
				<Input
					placeholder='965557013'
					className='border-primary'
					value={phone}
					onChange={e => {
						const num = e.target.value;

						if (num.length >= 9) {
							setPhone(num.slice(0, 9));
						} else {
							setPhone(num);
						}
					}}
					type='number'
					maxLength={9}
					inputMode='numeric'
				/>
			</CardContent>
		</Card>
	);
}
