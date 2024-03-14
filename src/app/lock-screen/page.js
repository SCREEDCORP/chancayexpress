"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Switcher = dynamic(()=>import('../components/switcher'));

export default function LockScreen() {
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
            <section className="md:h-screen py-36 flex items-center  bg-no-repeat bg-center "  style={{backgroundImage:"url('/images/cta.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <div className="text-center">
                                <Image src='/images/client/05.jpg' placeholder='blur' blurDataURL='/images/client/05.jpg' className="mx-auto h-28 w-28 rounded-full shadow dark:shadow-gray-800" alt="" width={112} height={112}   />
                                <h5 className="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                            </div>
                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="inline-flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                            <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Login / Sign in" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    )
}
