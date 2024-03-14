"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr:false});
import "tiny-slider/dist/tiny-slider.css";

import "../../app/assets/css/tailwind.css";
import { ExploreItems } from '../data/data';

import {MdOutlineArrowForward} from "react-icons/md"

const settings = {
  lazyload: true,
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    1025: {
      items: 4,
    },

    992: {
      items: 3,
    },

    767: {
      items: 2,
    },
    576: {
      items: 2,
    },
    320: {
      items: 1,
    },
  },
};

export default function Collections(props) {
  const { data } = props;
  return (
    <>
      <div className="container md:mt-36 mt-24">
        <div className="md:flex justify-between items-center">
          <div className="md:w-10/12 md:text-start text-center">
            <h3 className="md:text-[30px] text-[26px] font-semibold">
              Top Collections
            </h3>
          </div>
          <div className="md:w-2/12 text-end md:block hidden">
            <Link
              href="/collections"
              className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex items-center"
            >
              <span>See More</span>
              <MdOutlineArrowForward className="text-sm ms-1"/>
            </Link>
          </div>
        </div>

        <div className="grid relative grid-cols-1 mt-10">
          <div className="tiny-four-icon-item">
            <TinySlider settings={settings}>
              {ExploreItems.map((item, index) => {
                return (
                  <div className="tiny-slide" key={index}>
                    <div className="group  overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2 ">
                      <Image
                        src={item.image}
                        className="rounded-lg max-w"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        placeholder='blur'
                        blurDataURL={item.image}
                      />
                      <div className=" p-4 -mt-14">
                        <div className="relative inline-block">
                          <Image
                            src={item.avatar}
                            className="h-16 rounded-md shadow-md dark:shadow-gray-800"
                            alt=""
                            width={64}
                            height={64}
                            placeholder='blur'
                            blurDataURL={item.avatar}
                          />
                          {/* <BsPatchCheckFill className=" text-emerald-600 text-lg absolute -bottom-1 -end-2"/> */}
                          <i className="mdi mdi-check-decagram text-emerald-600 text-2xl absolute -bottom-3 -end-2"></i>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/explore-one"
                            className="font-semibold block text-[18px] hover:text-violet-600"
                          >
                            {item.title}
                          </Link>
                          <span className="text-slate-400 mt-1 text-sm">
                            <span className="italic">by</span>{" "}
                            <Link
                              href={`/creator-profile/${item.id}`}
                              className="text-violet-600 font-medium"
                            >
                              {item.subtext}
                            </Link>
                          </span>
                          <span className="text-slate-400 block text-[16px] mt-1">
                            {item.items} Items
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-6 md:hidden">
          <div className="text-center">
            <Link
              href="/collections"
              className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex align-middle"
            >
              See More <MdOutlineArrowForward className="text-sm ms-1"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
