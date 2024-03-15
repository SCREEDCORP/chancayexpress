"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
import type { ReplaceNullableToOptional, ZodInferSchema } from "@/types";

const NavbarLight = dynamic(() => import("../../components/navbar-light"));

type CreateProduct = Omit<
  Product,
  "id" | "createdAt" | "updatedAt" | "status" | "image" | "userId"
> & {
  // image: Blob;
};

const schema = z.object<
  ZodInferSchema<ReplaceNullableToOptional<CreateProduct>>
>({
  costInCents: z.number({ coerce: true }).refine((n) => {
    const decimalPart = n.toString().split(".")[1];
    return decimalPart ? decimalPart.length <= 2 : true;
  }, "El costo debe tener maximo 2 decimales"),
  description: z.string().optional(),
  // image: z.instanceof(Blob),
  name: z.string(),
});

export function CreateProduct({ userId }: { userId: string }) {
  const { isPending, mutate } = useMutation({
    mutationFn: async ({ costInCents, ...data }: z.infer<typeof schema>) => {
      const res = await fetch(`/api/users/${userId}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, costInCents: costInCents * 100 }),
      });

      if (!res.ok) {
        const msg = await res.json();
        throw new Error(msg.message);
      }

      return res.json();
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    disabled: isPending,
  });

  return (
    <>
      {/* <NavbarLight /> */}

      <div className="relative mt-7">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-4">
              <div className="group profile-pic w-[112px]">
                <input
                  id="pro-img"
                  name="profile-image"
                  type="file"
                  className="hidden"
                  // onChange={handleChange}
                />
                <div>
                  <div className="relative h-28 w-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden ml-7">
                    <Image
                      src={"/images/avatar/1.jpg"}
                      placeholder="blur"
                      blurDataURL="/images/avatar/1.jpg"
                      className="rounded-full"
                      id="profile-image"
                      alt=""
                      width={112}
                      height={112}
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500"></div>
                    <label
                      className="absolute inset-0 cursor-pointer"
                      htmlFor="pro-img"
                    ></label>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 mt-4 ">
                Sube tu foto de perfil, recomendamos que tu imagen sea de
                400X400px.
              </p>
            </div>

            <div className="lg:col-span-9 md:col-span-8">
              <h5 className="text-lg font-semibold mb-4 text-center">
                Crea un Producto para tu Negocio:
              </h5>
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit((data) => mutate(data))}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre del Producto</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Hamburguesa"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="costInCents"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Costo: <span className="text-red-600">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="15.90"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="mt-5">
                            <FormLabel>Descripcion:</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Realiza una breve descripcion del producto"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button className="mt-5" disabled={isPending}>
                        Crear Producto de Negocio
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                <h5 className="text-lg font-semibold mb-5 text-red-600">
                  Eliminar Cuenta :
                </h5>

                <p className="text-slate-400 mb-4">
                  Estas seguro que deseas eliminar el perfil de tu negocio? ,
                  recuerda que se borraran todos los datos de tu perfil.
                </p>

                <Link
                  href="/"
                  className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
