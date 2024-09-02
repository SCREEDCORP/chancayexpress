import { cn } from "@/lib/utils";

export function Card({
	children,
	className,
	...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
	return (
		<div
			{...props}
			className={cn(
				"group relative h-fit overflow-hidden rounded-md bg-gray-50 shadow duration-500 ease-in-out dark:bg-slate-800 dark:shadow-gray-800",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function CardHeader({
	children,
	className,
	...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
	return (
		<div {...props} className={cn("p-3", className)}>
			{children}
		</div>
	);
}

export function CardContent({
	children,
	className,
	...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
	return (
		<div
			{...props}
			className={cn("border-t p-2 dark:border-t-gray-700", className)}
		>
			{children}
		</div>
	);
}
