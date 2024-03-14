"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useEffect } from "react";
import Link from "next/link";

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));
const Collections = dynamic(()=>import('../components/collections'));
const DiscoverItems = dynamic(()=>import('../components/discover-items'));
const Creator = dynamic(()=>import('../components/creator'));
const QA = dynamic(()=>import('../components/qa'));
const GetTouch = dynamic(()=>import('../components/get-touch'));

export default function IndexFour(){
    useEffect(() => {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.body.classList.add(
            "font-urbanist",
            "text-base",
            "text-black",
            "dark:text-white",
            "dark:bg-slate-900"
          );

    }, []);
   
    return(
        <>
         <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>
         <Navbar />
         <section className="relative md:pt-48 pt-36 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center text-center mt-10">
                        <div className="relative">
                            <div className="relative mb-5">
                                <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl">Discover rate <br /> collection or <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Arts & NFTs</span></h1>

                                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
                            </div>
                            <p className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>

                            <div className="mt-8">
                                <Link href="/explore-one" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explore now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                        <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                        <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                    </div>
                </div>
                <Collections/>

            </section>
            <section className="relative md:py-24 py-16">
                <DiscoverItems title='Discover Items'/>
                <Creator title="Best Creators & Sellers" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"
                />
                <QA />
                <GetTouch />
            </section>
            <Footer />
            <Switcher />
        </>
    )
}