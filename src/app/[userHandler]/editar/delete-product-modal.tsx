"use client";
import { useMutation } from "@tanstack/react-query";
import { MdClose } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ModalProps = {
  productId: string;
  onClose: () => void;
  productName: string;
};

export function DeleteProductModal({
  onClose,
  productId,
  productName,
}: ModalProps) {
  const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const msg = await res.json();
        throw new Error(msg.message);
      }

      return res.json();
    },
    onSuccess: (response) => {
      console.log({ response });
      router.refresh();
      onClose();
    },
  });

  return (
    <div
      className={`fixed inset-0 z-50 m-auto flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-50 dark:bg-opacity-80`}
    >
      <div className="relative h-auto w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-slate-900 dark:shadow-gray-800">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
            <h5 className="ml-16 text-xl font-semibold">Realiza tu pedido</h5>
            <button
              type="button"
              className="items-right ms-auto inline-flex rounded-lg bg-transparent p-1.5 text-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <MdClose onClick={() => onClose()} />
            </button>
          </div>
          <div className="p-6">
            <div>
              Estas seguro que deseas eliminar el producto: {productName}
            </div>
            <div className="mt-4">
              <Button disabled={isPending} onClick={() => mutate()}>
                <i className="mdi mdi-cash"></i> Eliminar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
