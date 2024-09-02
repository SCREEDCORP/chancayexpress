export const ROUTES = {
	home: "/",
	validarPedido: {
		path: "/validar-pedido",
		detalle: (requestId: string) => `${ROUTES.validarPedido.path}/${requestId}`,
	},
	perfil: {
		path: "/perfil",
		detalle: (userHandler: string) => `${ROUTES.perfil.path}/${userHandler}`,
	},
	comprarProducto: {
		path: "/comprar-producto",
		detalle: (productId: string) =>
			`${ROUTES.comprarProducto.path}/${productId}`,
	},
} as const;
