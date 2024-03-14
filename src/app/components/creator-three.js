"use client"; // This is a client component 👈🏽

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {MdOutlineArrowForward, } from "react-icons/md"
import {FiUserPlus} from "react-icons/fi"
import { ExploreItems } from "../data/data";

export default function CreatorThree({title, description, data} ) {
  return (
    <>
      <div className="container">
        <div className="md:flex justify-between items-center">
          <div className="md:w-10/12 md:text-start text-center">
            <h3 className="md:text-[30px] text-[26px] font-semibold mb-4">
              {title}
              <select
                className="form-select z-2 text-violet-600 focus-visible:outline-none bg-transparent border-0 focus:ring-transparent"
                aria-label="Default select example"
              >
                <option className="text-lg font-medium">Week</option>
                <option className="text-lg font-medium">Month</option>
                <option className="text-lg font-medium">Year</option>
              </select>
            </h3>
            <p className="text-slate-400">{description}</p>
          </div>
          <div className="md:w-2/12 text-end md:block hidden">
            <Link
              href="/creators"
              className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex align-middle items-center"
            >
              <span>All Creators </span>
              <MdOutlineArrowForward className="ms-1 text-sm"/>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
          {ExploreItems.slice(0,9).map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
            >
              <div className="flex items-center">
                <div className="relative inline-block">
                  <Image
                    src={item.avatar}
                    className="h-16 rounded-md"
                    alt=""
                    width={64}
                    height={64}
                    placeholder="blur"
                    blurDataURL={item.avatar}
                  />
                  <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                </div>

                <div className="ms-3">
                  <Link
                    href={`/creator-profile/${item.id}`}
                    className="font-semibold block hover:text-violet-600"
                  >
                    {item.name}
                  </Link>
                  <span className="text-slate-400 text-sm block mt-0.5">
                    {item.subtext}
                  </span>
                </div>
              </div>

              <Link
                href="/"
                className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"
              >
                <FiUserPlus className="text-[20px]"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-6 md:hidden">
        <div className="text-center">
          <Link
            href="/collections"
            className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex align-middle"
          >
            All Creators <MdOutlineArrowForward className="ms-1 text-sm"/>
          </Link>
        </div>
      </div>
    </>
  );
}
