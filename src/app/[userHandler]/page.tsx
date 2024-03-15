import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/server/db";
import { StoreProducts } from "./store-products";

type Context = {
  params: {
    userHandler: string;
  };
};

export const dynamic = "force-dynamic";

export default async function CreatorProfile({ params }: Context) {
  const user = await db.user.findUnique({
    where: {
      nameHandler: params.userHandler,
    },
    include: {
      products: true,
    },
  });

  if (!user) return notFound();

  return (
    <>
      <section className="relative md:pb-24 pb-16 lg:mt-24 ">
        <div className="lg:container container-fluid ">
          <div className="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow dark:shadow-gray-700">
            <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="hidden"
              // onChange={handleChange}
            />
            <label
              className="absolute inset-0 cursor-pointer"
              htmlFor="pro-banner"
            ></label>
          </div>
        </div>

        <div className="md:flex justify-center mt-10">
          <div className="md:w-full">
            <div className="relative -mt-[60px] text-center">
              <div className="group profile-pic w-[112px] mx-auto">
                <input
                  id="pro-img"
                  name="profile-image"
                  type="file"
                  className="hidden"
                  // onChange={ProfileChange}
                />
                <div>
                  <div className="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
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

              <div className="mt-6">
                <h5 className="text-xl font-semibold">
                  {user.name}{" "}
                  <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i>
                </h5>
                <p className="text-slate-400 text-[16px] mt-1">
                  {user.description}
                </p>

                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        <StoreProducts
          products={user.products.map((p) => ({
            id: p.id,
            title: p.name,
            subtext: p.description ?? "",
            priceInCents: p.costInCents,
            image: "/images/items/beef.jpg",
            avatar: "/images/avatar/1.jpg",
          }))}
        />
      </section>
    </>
  );
}
