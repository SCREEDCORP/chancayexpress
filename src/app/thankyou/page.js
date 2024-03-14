"use client"; // This is a client component 👈🏽
import React, { useEffect } from "react";
import dynamic from 'next/dynamic'
import Link from "next/link";
const Switcher = dynamic(()=>import('../components/switcher'));
import { ArrowLeft } from 'react-feather'; 
import {LiaThumbsUpSolid} from "react-icons/lia"

export default function Thankyou() {
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
            <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="title-heading text-center my-auto">
                            <div className="w-24 h-24 bg-violet-600/5 text-violet-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <LiaThumbsUpSolid/>
                            </div>
                            <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">Thank You</h1>
                            <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>

                            <div className="mt-6">
                                <Link href="/index" className="btn bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white rounded-full">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-3 end-3">
                <Link href="/" className="back-button btn btn-icon bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full"><ArrowLeft className="h-4 w-4"></ArrowLeft></Link>
            </div>
            <Switcher />
        </>
    )
}
