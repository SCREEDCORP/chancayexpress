"use client";
import React from "react";

import {
  ProductItem,
  ProductList,
  type ProductProps,
} from "@/app/components/product";
import { formatPrice } from "@/lib/utils";
import { DeleteProductModal } from "./delete-product-modal";

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
            onAction={() => setProductId(item.id)}
            action="Eliminar"
          />
        ))}
      </ProductList>
      {productId && (
        <DeleteProductModal
          productId={productId}
          productName={products.find((p) => p.id === productId)?.title ?? ""}
          onClose={() => setProductId(null)}
        />
      )}
    </>
  );
}
