"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';

import React, { useEffect} from "react";
import Link from "next/link";

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));
const CreatorTwo = dynamic(()=>import('../components/creator-two'));
import {creatorsData} from "../data/data"

export default function Creatores() {
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
      <Navbar />
      <section
        className="relative table w-full py-36  bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
            Recent Clients
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          
        </div>
      </section>
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
        <CreatorTwo all={true} pagination={true}/>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
