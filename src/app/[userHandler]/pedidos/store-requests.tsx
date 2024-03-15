"use client";
import type { ProductRequest, ProductRequestStatus } from "@prisma/client";

import { RequestItem, RequestList } from "@/app/components/request";
import { useRouter } from "next/navigation";

type StoreRequestsProps = {
  requests: (ProductRequest & {
    product: {
      name: string;
      user: {
        name: string | null;
      };
    };
  })[];
};

export function StoreRequests({ requests }: StoreRequestsProps) {
  const router = useRouter();

  async function changeRequestStatus({
    requestId,
    status,
  }: {
    requestId: string;
    status: ProductRequestStatus;
  }) {
    const res = await fetch(`/api/requests/${requestId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    console.log(await res.json());

    router.refresh();
  }

  return (
    <RequestList>
      {requests.map((r) => (
        <RequestItem
          key={r.id}
          productName={r.product.name}
          requestCode={r.code}
          requestDescription={r.description ?? "Sin descripcion del pedido"}
          requestQuantity={r.quantity}
          requestStatus={r.status}
          storeName={r.product.user.name ?? ""}
          requestId={r.id}
          onSelectStatus={changeRequestStatus}
        />
      ))}
    </RequestList>
  );
}
