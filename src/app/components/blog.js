import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {LuClock, LuCalendarDays} from 'react-icons/lu'
import { MdOutlineArrowForward} from 'react-icons/md'
import { blogData } from '../data/data';

export default function blog() {
   
    return (
        <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">Latest Blog or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {blogData.slice(0,3).map((item,index)=>{
                    return(
                        <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 hover:shadow-md transition-all duration-500" key={item.id}>
                        <Image src={item.image} alt="" placeholder='blur' blurDataURL={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:'auto'}}  />
    
                        <div className="relative p-6">
                            <div className="absolute start-6 -top-4">
                                <span className="bg-violet-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.categoty}</span>
                            </div>
    
                            <div className="">
                                <div className="flex mb-4">
                                    <span className="text-slate-400 text-[16px] flex items-center"><LuCalendarDays className="text-slate-900 dark:text-white me-2"/> <span>{item.date}</span> </span>
                                    <span className="text-slate-400 text-[16px] ms-3 flex items-center"><LuClock className="text-slate-900 dark:text-white me-2 text-base"/> <span>5 min read</span> </span>
                                </div>
    
                                <Link href={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-violet-600 duration-500 ease-in-out">{item.title}</Link>
    
                                <div className="flex justify-between mt-4">
                                    <Link href={`/blog-detail/${item.id}`} className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out flex items-center"> <span>Read More</span> <MdOutlineArrowForward className='text-sm ms-1'/></Link>
                                    <span className="text-slate-400 text-[16px]">by <Link href={`/creator-profile/${item.id}`} className="text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-600 font-medium">{item.subtext}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
              
            </div>
        </div>
    )
}
