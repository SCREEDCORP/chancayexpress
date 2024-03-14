"use client"; // This is a client component 👈🏽
import Link from "next/link";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineArrowForward,
} from "react-icons/md";
import { ExploreItems } from "../data/data";

import "../../app/assets/css/tailwind.css";
import { ProductItem } from "./product";

export default function DiscoverItems({ title, pagination, data, all }: any) {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 text-center">
          <h3 className="md:text-[30px] text-[26px] font-semibold">{title}</h3>
        </div>
        {all ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
            {ExploreItems.map((item, index) => {
              return <ProductItem key={index} {...item} id={item.id.toString()} />;
            })}
          </div>
        ) : (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
            {ExploreItems.slice(0, 8).map((item, index) => {
              return <ProductItem key={index} {...item} id={item.id.toString()} />;
            })}
          </div>
        )}

        {pagination ? (
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav>
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <Link
                      href="/#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      <MdKeyboardArrowLeft className="text-[20px]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      aria-current="page"
                      className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      <MdKeyboardArrowRight className="text-[20px]" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          ""
        )}

        {title !== undefined ? (
          <div className="grid grid-cols-1 mt-6">
            <div className="text-center">
              <Link
                href="/explore-one"
                className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex items-center"
              >
                {" "}
                <span>Explore More</span>{" "}
                <MdOutlineArrowForward className="ms-1 text-sm" />{" "}
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
