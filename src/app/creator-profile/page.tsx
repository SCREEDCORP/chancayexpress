"use client"; // This is a client component 👈🏽
import Image from "next/image";
import React, { useState } from "react";

import { ProductItem, ProductList } from "@/app/components/product";
import { Modal } from "../components/modal";
import { ExploreItems } from "../data/data";

export default function CreatorProfile() {
  const [file, setFile] = useState("/images/blog/single.jpg");
  const [profile, setProfile] = useState("/images/avatar/1.jpg");
  const [buyItemId, setBuyItemId] = React.useState<string | null>(null);

  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function ProfileChange(e: any) {
    setProfile(URL.createObjectURL(e.target.files[0]));
  }

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
              onChange={handleChange}
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
                  onChange={ProfileChange}
                />
                <div>
                  <div className="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                  <h1>hola</h1>
                    <Image
                      src={profile}
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
                  Jenny Jimenez{" "}
                  <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i>
                </h5>
                <p className="text-slate-400 text-[16px] mt-1">Descripcion</p>

                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        <ProductList>
          {ExploreItems.map((item, index) => (
            <ProductItem
              key={index}
              {...item}
              id={item.id.toString()}
              price="100"
              onAction={() => {}}
              action=""
            />
          ))}
        </ProductList>
      </section>
      <Modal itemId={buyItemId} onClose={() => setBuyItemId(null)} />
    </>
  );
}
