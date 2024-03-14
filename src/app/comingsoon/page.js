"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
const Switcher = dynamic(() => import("../components/switcher"));

export default function Comingsoon() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900"
    );

    const interval = setInterval(() => {
      let startDate = new Date("December 29, 2023 6:0:0");
      let currentDate = new Date();
      const diff = startDate.getTime() - currentDate.getTime();

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTime({ hours, minutes, seconds, days });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section
        className="relative  bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/bg/bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center"></div>
              <Image
                src="/images/logo-white.png"
                placeholder="blur"
                blurDataURL="/images/logo-white.png"
                className="mx-auto"
                alt=""
                width={350}
                height={500}
              />
              <div className="title-heading text-center my-auto">
                <div className="md:my-0 my-10">
                  <div className="wave-effect relative tracking-tighter mb-6 md:text-5xl text-3xl font-bold text-white">
                    <span className="relative inline-block">P</span>
                    <span className="relative inline-block">R</span>
                    <span className="relative inline-block">O</span>
                    <span className="relative inline-block">X</span>
                    <span className="relative inline-block">I</span>
                    <span className="relative inline-block">M</span>
                    <span className="relative inline-block">A</span>
                    <span className="relative inline-block">M</span>
                    <span className="relative inline-block">E</span>
                    <span className="relative inline-block">N</span>
                    <span className="relative inline-block">T</span>
                    <span className="relative inline-block">E</span>
                  </div>
                  <p className="text-white/70 max-w-xl mx-auto">
                    Un nuevo servicio de delivery para negocios en Chancay !
                  </p>

                  <div id="countdown">
                    <ul className="count-down list-none inline-block text-white text-center mt-8">
                      <li id="days" className="count-number inline-block m-2">
                        {time.days}
                        <p className="count-head">Days</p>
                      </li>
                      <li id="hours" className="count-number inline-block m-2">
                        {time.hours}
                        <p className="count-head">Hours</p>
                      </li>
                      <li id="mins" className="count-number inline-block m-2">
                        {time.minutes}
                        <p className="count-head">Mins</p>
                      </li>
                      <li id="secs" className="count-number inline-block m-2">
                        {time.seconds}
                        <p className="count-head">secs</p>
                      </li>
                      <li id="end" className="h1"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-white">
                  © {new Date().getFullYear()} ChancayExpress.Diseñado y
                  desarrollado con{" "}
                  <i className="mdi mdi-heart text-red-600"></i> por{"  "}
                  <Link
                    href="https://www.lainds.lat/"
                    target="_blank"
                    className="text-reset"
                  >
                    Lain~Ds
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
