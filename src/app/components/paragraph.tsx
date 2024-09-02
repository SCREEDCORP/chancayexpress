export function Paragraph({ children }: React.PropsWithChildren) {
	return <article className='space-y-2'>{children}</article>;
}

export function ParagraphTitle({ children }: React.PropsWithChildren) {
	return <h5 className='text-xl font-semibold'>{children}</h5>;
}

export function ParagraphContent({ children }: React.PropsWithChildren) {
	return <p className='text-slate-400'>{children}</p>;
}
