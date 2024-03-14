import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExploreItems } from '../data/data';


export default function ExploreTtem({title,data}) {

    return (
        <>
            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="md:text-[30px] text-[26px] font-semibold">{title}</h3>
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
                    {
                        ExploreItems.slice(0,8).map((item, index) => (
                            <div key={index} className="group relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-1 group-hover:-mt-2 -ms-1 group-hover:-ms-2 h-[98%] w-[98%] -z-1 transition-all duration-500"></div>
                                <div className="relative overflow-hidden">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image src={item.image} placeholder='blur' blurDataURL={item.image} className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}  />
                                    </div>

                                    <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                        <Link href={`/item-detail/${item.id}`} className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                                    </div>

                                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="#" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></Link>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <div className="flex items-center">
                                        <Image src={item.avatar} placeholder='blur' blurDataURL={item.avatar} className="rounded-full h-8 w-8" alt="" width={64} height={64}/>
                                        <Link href={`/creator-profile/${item.id}`} className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{item.subtext}</Link>
                                    </div>

                                    <div className="my-3">
                                        <Link href={`/item-detail/${item.id}`} className="font-semibold hover:text-violet-600">{item.title}</Link>
                                    </div>

                                    <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                        <div>
                                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                        </div>

                                        <div>
                                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
