"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserType, type User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { NonNullableObject, ZodInferSchema } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NavbarLight = dynamic(() => import("../components/navbar-light"));

type CreateUser = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "emailVerified" | "image" | "type"
>;

const schema = z.object<ZodInferSchema<NonNullableObject<CreateUser>>>({
  email: z.string(),
  name: z.string(),
  nameHandler: z
    .string()
    .regex(
      /^[a-zA-Z0-9_]*$/,
      "Nombre unico del negocio invalido. Solo puede contener letras, numeros y guiones bajos",
    ),
  description: z.string(),
  direction: z.string(),
  phone: z.string(),
});

export default function CreatorProfile() {
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
        // if (value) {
        // }
      });

      formData.append("type", UserType.STORE);

      const res = await fetch("/api/users", {
        method: "POST",
        body: formData,
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

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900",
    );
  }, []);

  return (
    <>
      <NavbarLight />

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
                Crea el Perfil de un Negocio:
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
                            <FormLabel>Nombre del Negocio</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Chancay Express"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* <div>
                        <label className="form-label font-medium">
                          Nombre del Negocio :{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                          placeholder="Nombre del Negocio:"
                          id="firstname"
                          name="name"
                        />
                      </div> */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Email: <span className="text-red-600">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="name@domain.com"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* <div>
                        <label className="form-label font-medium">
                          Email: <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                          placeholder="Email:"
                          id="lastname"
                          name="name"
                        />
                      </div> */}
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
                      <FormField
                        control={form.control}
                        name="nameHandler"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre unico del negocio</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="ChancayExpress"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormDescription>
                              Este es el identificador de tu negocio
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Numero de Contacto:
                              <span className="text-red-600">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="957842135"
                                value={field.value ?? undefined}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* <div>
                          <label className="form-label font-medium">
                            Numero de Contacto:{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="Numero del Negocio:"
                            id="lastname"
                            name="name"
                          />
                        </div> */}
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
                      <FormField
                        control={form.control}
                        name="direction"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Direccion:</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Av. Los Incas 123, Chancay"
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
                                placeholder="Realiza una breve descripcion de tu negocio"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button className="mt-5">Crear Perfil de Negocio</Button>
                    </div>
                  </form>
                </Form>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <h5 className="text-lg font-semibold mb-5">
                      Change password :
                    </h5>
                    <form>
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <label className="form-label font-medium">
                            Old password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="Old password"
                          />
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            New password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="New password"
                          />
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            Re-type New password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="Re-type New password"
                          />
                        </div>
                      </div>

                      <button className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5">
                        Save password
                      </button>
                    </form>
                  </div>
                </div> */}
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
