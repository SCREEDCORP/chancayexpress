"use client"; // This is a client component 👈🏽
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ExploreItems} from "../data/data"

import {MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import {FiUserPlus} from 'react-icons/fi'

export default function CreatorTwo({ title, description, data, pagination,all }) {
    return (
        <div className={`container  ${title !== undefined ? 'md:mt-24 mt-16' : ''}`}>
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">{title}</h3>

                <p className="text-slate-400 max-w-xl mx-auto">{description}</p>
            </div>
            {all ? <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${title !== undefined ? 'mt-12' : ''}`}>
                {
                    ExploreItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 ease-in-out duration-500 hover:-mt-2 h-fit">
                            <div className="flex justify-between items-center p-3">
                                <div className="flex items-center">
                                    <div className="relative inline-block">
                                        <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="h-16 rounded-md" alt="" width={64} height={64}  />
                                        <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.name}</Link>
                                        <span className="text-slate-400 text-sm block mt-1">{item.subtext}</span>
                                    </div>
                                </div>

                                <Link href="#" className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><FiUserPlus className="text-[20px]"/></Link>
                            </div>

                            <div className="p-2 border-t dark:border-t-gray-700">
                                <div className="flex items-center">
                                    {
                                        item.subImages.map((subitem, index) => (
                                            <div className="w-1/2 p-1" key={index}>
                                                <Link href="#" className="rounded-md lightbox">
                                                    <Image src={subitem.image} placeholder='blur' blurDataURL={subitem.image} className="rounded-md" alt="" width={104} height={104}  />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> :<div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${title !== undefined ? 'mt-12' : ''}`}>
                {
                    ExploreItems.slice(0,6).map((item, index) => (
                        <div key={index} className="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 ease-in-out duration-500 hover:-mt-2 h-fit">
                            <div className="flex justify-between items-center p-3">
                                <div className="flex items-center">
                                    <div className="relative inline-block">
                                        <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="h-16 rounded-md" alt="" width={64} height={64}  />
                                        <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.name}</Link>
                                        <span className="text-slate-400 text-sm block mt-1">{item.subtext}</span>
                                    </div>
                                </div>

                                <Link href="#" className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><FiUserPlus className="text-[20px]"/></Link>
                            </div>

                            <div className="p-2 border-t dark:border-t-gray-700">
                                <div className="flex items-center">
                                    {
                                        item.subImages.map((subitem, index) => (
                                            <div className="w-1/2 p-1" key={index}>
                                                <Link href="#" className="rounded-md lightbox">
                                                    <Image src={subitem.image} placeholder='blur' blurDataURL={subitem.image} className="rounded-md" alt="" width={104} height={104}  />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>}
            

            {
                pagination ? (
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav>
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                            <MdKeyboardArrowLeft className="text-[20px]"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                         <MdKeyboardArrowRight className="text-[20px]"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                ) : ('')
            }
        </div>
    )
}
