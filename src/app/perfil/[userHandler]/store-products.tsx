"use client";
import React from "react";

import {
  ProductItem,
  ProductList,
  type ProductProps,
} from "@/app/components/product";
import { BuyProductModal } from "./buy-product-modal";
import { formatPrice } from "@/lib/utils";

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
            action="Comprar ahora"
          />
        ))}
      </ProductList>
      {productId && (
        <BuyProductModal
          productId={productId}
          individualCost={
            products.find((p) => p.id === productId)?.priceInCents ?? 0
          }
          onClose={() => setProductId(null)}
        />
      )}
    </>
  );
}
