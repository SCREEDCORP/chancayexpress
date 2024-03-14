"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { VscListFlat } from "react-icons/vsc";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiHeart, FiUsers } from "react-icons/fi";
import { BsTag } from "react-icons/bs";
import { LuSearch, LuCamera } from "react-icons/lu";
import {
  PiWalletBold,
  PiFireSimpleBold,
  PiBrowsersLight,
  PiMusicNotesBold,
} from "react-icons/pi";

import { activityData } from "../data/data";

const NavbarLight = dynamic(() => import("../components/navbar-light"));

export default function Activity() {
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

  return (
    <>
      <div className="relative">
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
          <div className="md:flex">
            <div className="lg:w-3/5 md:w-1/2 md:pe-4">
              {activityData.map((item, index) => {
                return (
                  <div
                    className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 overflow-hidden ease-in-out duration-500 w-full mx-auto lg:max-w-2xl mb-7"
                    key={index}
                  >
                    <div className="lg:flex">
                      <div className="relative md:shrink-0"></div>
                      <div className="p-6 w-full">
                        <ul className="flex justify-between items-center list-none pb-6">
                          <li className="block items-center">
                            <span className="bg-slate-900 text-white dark:bg-slate-800 text-[16px] px-2.5 py-1 font-semibold rounded-full h-5">
                              {item.title}
                            </span>
                            <span className="text-slate-400 text-sm ms-2">
                              {item.time}
                            </span>
                            <span className="bg-slate-900 text-white dark:bg-slate-800 text-[15px] px-2.5 py-1 font-semibold rounded-full h-5">
                              codigo cliente
                            </span>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-lg rounded-full text-gray-300 dark:text-gray-800 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
                            ></Link>
                          </li>
                        </ul>

                        <Link
                          href={`/item-detail/${item.id}`}
                          className="font-semibold"
                        >
                          {item.description}
                        </Link>

                        <div className="pt-6">
                          <Link
                            href={`/item-detail/${item.id}`}
                            className="btn btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"
                          >
                            {item.amount}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-[30px] text-center">
                <Link href="#" className="text-violet-600">
                  <i className="mdi mdi-loading mdi-spin"></i> More Items
                </Link>
              </div>
            </div>

            <div className="lg:w-2/5 md:w-1/2 md:ps-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
