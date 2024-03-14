"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";


const DiscoverItems = dynamic(() => import("../components/discover-items"));
import { ExploreItems } from "../data/data";

export default function CreatorProfile() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900"
    );
  }, []);

  const [file, setFile] = useState("/images/blog/single.jpg");
  const [profile, setProfile] = useState("/images/avatar/1.jpg");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function ProfileChange(e) {
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
                <p className="text-slate-400 text-[16px] mt-1">
                  Descripcion  
                </p>

                <form class="max-w-xs mx-auto">
                  <label
                    for="counter-input"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Choose quantity:
                  </label>
                  <div class="relative flex items-center">
                    <button
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="counter-input"
                      class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="counter-input"
                      data-input-counter
                      class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                      placeholder=""
                      value="12"
                      required
                    />
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </form>

                <div className="mt-4">
                  <Link
                    href="#"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white mx-1"
                  >
                    <i className="mdi mdi-plus"></i> Plato Nuevo
                  </Link>
                  <Link
                    href="/creator-profile-edit"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white mx-1"
                  >
                    <i className="mdi mdi-cog"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DiscoverItems data={ExploreItems} />
      </section>
    </>
  );
}
