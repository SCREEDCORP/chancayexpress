"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'

import React, { useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr:false});
// import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));
const Feature = dynamic(()=>import('../components/feature'));
const CollectionTwo = dynamic(()=>import('../components/collection-two'));
const AuctionsTwo = dynamic(()=>import('../components/auctions-two'));
const CreatorTwo = dynamic(()=>import('../components/creator-two'));
import { ExploreItems } from '../data/data';

export default function IndexThree() {
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
  const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  };

 return (
    <>
      <Navbar />
      <section className="relative pt-24 overflow-hidden">
        <div className="container-fluid">
          <div className="grid grid-cols-1 relative">
            <div className="tiny-five-item">
              <TinySlider settings={settings}>
                {ExploreItems.map((el, index) => (
                  <div className="tiny-slide" key={index}>
                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit m-2">
                      <div className="relative overflow-hidden">
                        <div className="relative overflow-hidden rounded-lg">
                          <Image
                            src={el.image}
                            className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                            placeholder='blur'
                            blurDataURL={el.image}
                             
                          />
                        </div>

                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                          <Link
                            href={`/item-detail/${el.id}`}
                            className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                          >
                            <i className="mdi mdi-lightning-bolt"></i> Buy Now
                          </Link>
                        </div>

                        <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <Link
                            href="/"
                            className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                          >
                            <i className="mdi mdi-plus"></i>
                          </Link>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center">
                          <Image
                            src={el.avatar}
                            className="rounded-full h-8 w-8"
                            alt=""
                            width={64}
                            height={64}
                            placeholder='blur'
                            blurDataURL={el.avatar}
                          />
                          <Link
                            href="/creator-profile"
                            className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600"
                          >
                            {el.subtext}
                          </Link>
                        </div>

                        <div className="my-3">
                          <Link
                            href={`/item-detail/${el.id}`}
                            className="font-semibold hover:text-violet-600"
                          >
                            {el.title}
                          </Link>
                        </div>

                        <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                          <div>
                            <span className="text-[16px] font-medium text-slate-400 block">
                              Price
                            </span>
                            <span className="text-[16px] font-semibold block">
                              <i className="mdi mdi-ethereum"></i> 3.5 ETH
                            </span>
                          </div>

                          <div>
                            <span className="text-[16px] font-medium text-slate-400 block">
                              Highest Bid
                            </span>
                            <span className="text-[16px] font-semibold block">
                              <i className="mdi mdi-ethereum"></i> 3.55 ETH
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
                <Feature />
                <CollectionTwo title="Top Collection" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"/>
                <AuctionsTwo title="Live Auctions"
                    description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"/>

                <CreatorTwo title="Creators & Seller" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!" />
            </section>
            <Footer/>
            <Switcher/>
    </>
  );
}
