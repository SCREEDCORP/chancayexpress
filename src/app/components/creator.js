"use client"; // This is a client component 👈🏽

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {FiUserPlus} from "react-icons/fi"
import { ExploreItems } from '../data/data';

export default function Creator({title, description, data }) {

    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">{title}</h3>
                <p className="text-slate-400 max-w-xl mx-auto">{description}</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
                {
                    ExploreItems.slice(0,9).map((item, index) => {
                        return(
                        <div key={index} className="flex justify-between items-center p-3 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                            <div className="flex items-center">
                                <div className="relative inline-block">
                                    <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="h-16 rounded-md" alt="" width={64} height={64} />
                                    <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>

                                <div className="ms-3">
                                    <Link href={`/creator-profile/${item.id}`} className="font-semibold block hover:text-violet-600">{item.name}</Link>
                                    <span className="text-slate-400 text-sm block mt-0.5">{item.subtext}</span>
                                </div>
                            </div>

                            <Link href="#" className="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><FiUserPlus className="text-[18px]"/></Link>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}
