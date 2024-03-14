"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
const Switcher = dynamic(()=>import('../components/switcher'));

export default function Error() {
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
            <section className="relative bg-violet-600/5">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                            <div className="text-center">
                                <Image src='/images/logo-icon-64.png' placeholder='blur' blurDataURL='/images/logo-icon-64.png' className="mx-auto" alt="" width={80} height={80}  />
                            </div>
                            <div className="title-heading text-center my-auto">
                                <div className="md:my-0 my-10">
                                    <Image src='/images/error.png' placeholder='blur' blurDataURL='/images/error.png' className="mx-auto" alt="" width={320} height={320}  />
                                    <h1 className="my-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                                    <p className="text-slate-400">Whoops, this is embarassing. <br /> Looks like the page you were looking for wasnt found.</p>

                                    <div className="mt-6">
                                        <Link href="/" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Back to Home</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-slate-400">© {(new Date().getFullYear())}{" "} Giglink. Design with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" rel="noopener noreferrer" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    )
}
