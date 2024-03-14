"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));
const Feature = dynamic(()=>import('../components/feature'));
const CollectionTwo = dynamic(()=>import('../components/collection-two'));
const AuctionsTwo = dynamic(()=>import('../components/auctions-two'));
const Creator = dynamic(()=>import('../components/creator'));
const QA  = dynamic(()=>import('../components/qa'));
const GetTouch  = dynamic(()=>import('../components/get-touch'));

export default function IndexTen(){
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
        <Navbar/>
        <section className="relative pt-24 overflow-hidden">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                            <div className="slide-track flex items-center">
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src= '/images/blog/01.jpg' placeholder='blur' blurDataURL='/images/blog/01.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/03.jpg'  placeholder='blur' blurDataURL='/images/blog/03.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail"  className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/05.jpg' placeholder='blur' blurDataURL='/images/blog/05.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/07.jpg' placeholder='blur' blurDataURL='/images/blog/07.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/09.jpg' placeholder='blur' blurDataURL='/images/blog/09.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/11.jpg' placeholder='blur' blurDataURL='/images/blog/11.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/12.jpg' placeholder='blur' blurDataURL='/images/blog/12.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/14.jpg' placeholder='blur' blurDataURL='/images/blog/14.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/16.jpg' placeholder='blur' blurDataURL='/images/blog/16.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/18.jpg' placeholder='blur' blurDataURL='/images/blog/18.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/20.jpg' placeholder='blur' blurDataURL='/images/blog/20.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/22.jpg' placeholder='blur' blurDataURL='/images/blog/22.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/24.jpg' placeholder='blur' blurDataURL='/images/blog/24.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/26.jpg' placeholder='blur' blurDataURL='/images/blog/26.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slider2 relative overflow-hidden m-auto before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                            <div className="slide-track flex items-center">
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/02.jpg' placeholder='blur' blurDataURL='/images/blog/02.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/04.jpg' placeholder='blur' blurDataURL='/images/blog/04.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/06.jpg' placeholder='blur' blurDataURL='/images/blog/06.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/08.jpg' placeholder='blur' blurDataURL='/images/blog/08.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/10.jpg' placeholder='blur' blurDataURL='/images/blog/10.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/13.jpg' placeholder='blur' blurDataURL='/images/blog/13.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/15.jpg' placeholder='blur' blurDataURL='/images/blog/15.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/17.jpg' placeholder='blur' blurDataURL='/images/blog/17.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/19.jpg' placeholder='blur' blurDataURL='/images/blog/19.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/21.jpg' placeholder='blur' blurDataURL='/images/blog/21.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/23.jpg' placeholder='blur' blurDataURL='/images/blog/23.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/25.jpg' placeholder='blur' blurDataURL='/images/blog/25.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/01.jpg' placeholder='blur' blurDataURL='/images/blog/01.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide h-auto md:w-[360px] w-72 mx-2">
                                    <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                                        <Image src='/images/blog/05.jpg' placeholder='blur' blurDataURL='/images/blog/05.jpg' className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  />

                                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                            <Link href="/item-detail" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16">
                <Creator title="Best Creators & Sellers" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"/>
                <CollectionTwo title="Top Collection" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"/>
                <AuctionsTwo title="Live Auctions"  description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!" />
                <QA />
                <GetTouch />

            </section>
            <Footer />
            <Switcher />
        </>
    )
}