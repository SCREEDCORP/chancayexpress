"use client";
import { CheckIcon, Cross1Icon, Pencil2Icon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API } from "@/core/api";

export function EditDescription({
	description,
	userId,
}: {
	description: string | null;
	userId: string;
}) {
	const router = useRouter();
	const [isEditing, setIsEditing] = React.useState(false);
	const [descValue, setDescValue] = React.useState<string>(description ?? "");

	const { mutate, isPending } = useMutation({
		mutationFn: () => {
			return API.users.update({
				id: userId,
				data: {
					description: descValue || null,
				},
			});
		},
		onSuccess: () => {
			setIsEditing(false);
			router.refresh();
		},
	});

	if (!isEditing) {
		return (
			<div className='flex items-center justify-center gap-3'>
				<p className='mt-1 max-w-xs truncate text-[16px] text-slate-400'>
					{description}
				</p>
				<Button
					variant='outline'
					size='icon'
					onClick={() => setIsEditing(true)}
					title='Editar Descripcion'
				>
					<Pencil2Icon className='h-4 w-4' />
				</Button>
			</div>
		);
	}

	return (
		<div className='flex items-center justify-center gap-3'>
			<Input
				className='mt-1 max-w-xs truncate text-[16px] text-slate-400'
				onChange={e => setDescValue(e.target.value)}
				value={descValue}
				disabled={isPending}
			/>
			<div className='flex items-center justify-center gap-2'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => mutate()}
					title='Guardar Cambios'
					className='text-green-600'
					disabled={isPending}
				>
					<CheckIcon className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='icon'
					onClick={() => {
						setIsEditing(false);
						setDescValue(description ?? "");
					}}
					title='Deshacer cambios'
					className='text-red-600'
					disabled={isPending}
				>
					<Cross1Icon className='h-4 w-4' />
				</Button>
			</div>
		</div>
	);
}
