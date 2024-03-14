"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {MdOutlineArrowForward} from "react-icons/md"

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));

import{walletData} from "../data/data";

export default function Wallet(){
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
    return(
        <>
        <NavbarLight/>
        <section className="relative table w-full py-36  bg-bottom bg-no-repeat" style={{backgroundImage:"url('/images/bg/bg1.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Wallet Connect</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Giglink</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Wallet</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {
                            walletData.map((ele, index) => {
                                return(
                                <div key={index} className="group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500">
                                    <div className="relative -mt-16">
                                        <Image src={ele.image} placeholder='blur' blurDataURL={ele.image} className="bg-white dark:bg-slate-900 h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3" alt="" width={80}height={80}  />
                                        <h5 className="text-lg font-semibold mt-5">{ele.title}</h5>
                                        <p className="text-slate-400 mt-3s">Learn about how to get the wallet and much more clicking <Link href="/" data-modal-toggle="loginform" className="btn btn-link text-violet-600 hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out inline-flex items-center"><span>here</span><MdOutlineArrowForward className="ms-1 text-base"/></Link></p>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                </div>
            </section>
        <Footer/>
        <Switcher/>
        </>
    )
}