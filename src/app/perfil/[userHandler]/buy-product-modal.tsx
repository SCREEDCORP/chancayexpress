"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatPrice } from "@/lib/utils";
import type { ZodInferSchema } from "@/types";

type ModalProps = {
  productId: string;
  individualCost: number;
  onClose: () => void;
};

const schema = z.object<
  ZodInferSchema<{
    quantity: number;
    description?: string;
    deliveryPriceInCents: number;
  }>
>({
  quantity: z.number({ coerce: true }).min(1, "La cantidad debe ser mayor a 0"),
  description: z.string().optional(),
  deliveryPriceInCents: z.number({ coerce: true }),
});

export function BuyProductModal({
  individualCost,
  onClose,
  productId,
}: ModalProps) {
  const { isPending, mutate } = useMutation({
    mutationFn: async ({
      deliveryPriceInCents,
      ...data
    }: z.infer<typeof schema>) => {
      const res = await fetch(`/api/products/${productId}/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          deliveryPriceInCents: deliveryPriceInCents * 100,
        }),
      });

      if (!res.ok) {
        const msg = await res.json();
        throw new Error(msg.message);
      }

      return res.json();
    },
    onSuccess: (response) => {
      console.log({ response });
      onClose();
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      quantity: 1,
      deliveryPriceInCents: 12,
    },
  });

  const { quantity, deliveryPriceInCents } = form.watch();

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
            <Form {...form}>
              <form
                className="text-start"
                onSubmit={form.handleSubmit((data) => mutate(data))}
              >
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cantidad de Pedido:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              placeholder="1"
                              value={field.value ?? undefined}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* <label className="font-semibold">Cantidad de Pedido:</label>
                    <input
                      name="quantity"
                      id="number2"
                      type="number"
                      className="form-input mb-3 mt-3 h-10 w-full rounded-full border border-gray-200 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-violet-600 focus:ring-0 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-violet-600"
                      placeholder="0"
                    /> */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Envia un mensaje adicional:</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Carne cocida en 3/4"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* <label className="font-semibold">
                      Envia un mensaje adicional:
                    </label>
                    <Textarea
                      placeholder="Carne cocida en 3/4"
                      className="mt-2 resize-none"
                    /> */}
                  </div>
                </div>

                <div className="border-t pt-4 dark:border-t-gray-800">
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold"> Costo del pedido:</p>
                    <p className="text-sm font-semibold text-violet-600">
                      {formatPrice(quantity * individualCost)}
                    </p>
                  </div>
                  <div className="mt-1 flex justify-between">
                    <FormField
                      control={form.control}
                      name="deliveryPriceInCents"
                      render={({ field }) => (
                        <FormItem>
                          <div className="grid grid-cols-3 items-center">
                            <FormLabel className="col-span-2">
                              Costo de Envio:
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="12"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* <p className="text-sm font-semibold"> Costo de Envio:</p>
                    <p className="text-sm font-semibold text-violet-600">
                      {formatPrice(1200)}
                    </p> */}
                  </div>
                  <div className="mt-1 flex justify-between">
                    <p className="text-sm font-semibold"> Total :</p>
                    <p className="text-sm font-semibold text-violet-600">
                      {formatPrice(
                        deliveryPriceInCents * 100 + quantity * individualCost,
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Button disabled={isPending}>
                    <i className="mdi mdi-cash"></i> Realizar Pago
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
