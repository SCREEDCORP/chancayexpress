export const BASE_ACTIONS_ROUTE = "/actions";

export const ACTION_ROUTES = {
	paymentMethods: {
		/** [page.tsx](../app/@actions/(.)actions/(payment-methods)/actualizar-metodo-pago/[id]/page.tsx) */
		update: (id: number) =>
			`${BASE_ACTIONS_ROUTE}/actualizar-metodo-pago/${id}`,
		/** [page.tsx](../app/@actions/(.)actions/(payment-methods)/alternar-metodo-pago/[id]/page.tsx) */
		toggleStatus: (id: number) =>
			`${BASE_ACTIONS_ROUTE}/alternar-metodo-pago/${id}`,
	},
} as const;
