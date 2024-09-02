export const ROUTES = {
	home: "/",
	validarPedido: {
		path: "/validar-pedido",
		detalle: (requestId: string) => `${ROUTES.validarPedido.path}/${requestId}`,
	},
};
