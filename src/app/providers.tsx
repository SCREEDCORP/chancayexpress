"use client";
import {
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { reactQueryConfig } from "@/core/react-query";

export function Providers({ children }: React.PropsWithChildren) {
	const { toast } = useToast();

	const [queryClient] = React.useState(() => {
		return new QueryClient({
			...reactQueryConfig,
			queryCache: new QueryCache({
				onError: error => {
					if (error instanceof SyntaxError) {
						console.error(error);
						console.error("Error del cliente, respuesta desconocida");

						toast({
							title: "Error",
							description: "Error inesperado",
							variant: "destructive",
						});
					} else {
						toast({
							title: "Error",
							description: error.message,
							variant: "destructive",
						});
					}
				},
			}),
			mutationCache: new MutationCache({
				onError: error => {
					if (error instanceof SyntaxError) {
						console.error(error);
						console.error("Error del cliente, respuesta desconocida");

						toast({
							title: "Error",
							description: "Error inesperado",
							variant: "destructive",
						});
					} else {
						toast({
							title: "Error",
							description: error.message,
							variant: "destructive",
						});
					}
				},
			}),
		});
	});
	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<Toaster />
		</>
	);
}
