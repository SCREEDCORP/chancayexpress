"use client";
import React from "react";

import {
	ProductItem,
	ProductList,
	type ProductProps,
} from "@/app/components/product";
import { ROUTES } from "@/core/routes";
import { formatPrice } from "@/lib/utils";
import { BuyProductModal } from "./buy-product-modal";

export function StoreProducts({
	products,
}: {
	products: (Omit<ProductProps, "onAction" | "price" | "action"> & {
		priceInCents: number;
	})[];
}) {
	const [productId, setProductId] = React.useState<string | null>(null);

	return (
		<>
			<ProductList>
				{products.map((item, index) => (
					<ProductItem
						key={index}
						{...item}
						price={formatPrice(item.priceInCents)}
						cardLink={ROUTES.comprarProducto.detalle(item.id)}
					/>
				))}
			</ProductList>
			{productId && (
				<BuyProductModal
					productId={productId}
					individualCost={
						products.find(p => p.id === productId)?.priceInCents ?? 0
					}
					onClose={() => setProductId(null)}
				/>
			)}
		</>
	);
}
