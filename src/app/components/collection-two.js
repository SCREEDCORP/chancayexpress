"use client"; // This is a client component 👈🏽

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExploreItems } from '../data/data';

export default function CollectionTwo({ title, description, data,all}) {
    return (
        <>
            <div className={`container ${title !== undefined ? 'md:mt-24 mt-16' : ''}`}>
                {
                    title !== undefined ? (
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">{title}</h3>
                            <p className="text-slate-400 max-w-xl mx-auto">{description}</p>
                        </div>
                    ) : ('')
                }
                {all?<div className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${title !== undefined ? 'mt-12' : ''}`}>
                    {
                        ExploreItems.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500">
                                <Image src={item.image} placeholder='blur' blurDataURL={item.image} className="rounded-lg" alt="" width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}}  />

                                <div className="relative p-4 -mt-14">
                                    <div className="relative inline-block">
                                        <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="h-16 rounded-md shadow-md dark:shadow-gray-800" alt="" width={64} height={64}  />
                                        <i className="mdi mdi-check-decagram text-emerald-600 text-2xl absolute -bottom-3 -end-2"></i>
                                    </div>

                                    <div className="mt-3">
                                        <Link href="/explore-one" className="font-semibold block text-[18px] hover:text-violet-600">{item.title}</Link>
                                        <span className="text-slate-400 mt-1 text-sm"><span className="italic">by</span> <Link href={`/creator-profile/${item.id}`} className="text-violet-600 font-medium">{item.subtext}</Link></span>
                                        <span className="text-slate-400 block text-[16px] mt-1">{item.items} Items</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div> :
                <div className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${title !== undefined ? 'mt-12' : ''}`}>
                {
                    ExploreItems.slice(0,8).map((item, index) => (
                        <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500">
                            <Image src={item.image} placeholder='blur' blurDataURL={item.image} className="rounded-lg" alt="" width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}}  />

                            <div className="relative p-4 -mt-14">
                                <div className="relative inline-block">
                                    <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="h-16 rounded-md shadow-md dark:shadow-gray-800" alt="" width={64} height={64}  />
                                    <i className="mdi mdi-check-decagram text-emerald-600 text-2xl absolute -bottom-3 -end-2"></i>
                                </div>

                                <div className="mt-3">
                                    <Link href="/explore-one" className="font-semibold block text-[18px] hover:text-violet-600">{item.title}</Link>
                                    <span className="text-slate-400 mt-1 text-sm"><span className="italic">by</span> <Link href={`/creator-profile/${item.id}`} className="text-violet-600 font-medium">{item.subtext}</Link></span>
                                    <span className="text-slate-400 block text-[16px] mt-1">{item.items} Items</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> }
                
            </div>

        </>
    )
}
