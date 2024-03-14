"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useEffect } from "react";
import Link from "next/link";
import Select from 'react-select';

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));
const Feature = dynamic(()=>import('../components/feature'));
const CollectionTwo = dynamic(()=>import('../components/collection-two'));
const AuctionsTwo = dynamic(()=>import('../components/auctions-two'));
const CreatorTwo = dynamic(()=>import('../components/creator-two'));
import {AiOutlineAppstore, AiOutlineStar} from "react-icons/ai"
import {LuClock, LuSearch} from 'react-icons/lu';

export default function IndexSeven(){
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
      const options = [
        { value: 'Art', label: 'Art' },
        { value: 'Domain', label: 'Domain Names' },
        { value: 'Music', label: 'Music' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Trading', label: 'Trading Cards' },
        { value: 'Virtual', label: 'Virtual World' },
    ];
    
    const buyOptions = [
        { value: 'now', label: 'Buy Now' },
        { value: 'auctions', label: 'Auctions' },
        { value: 'offers', label: 'Offers' }
    ]
    const rateOptions = [
        { value: 'top', label: 'Top Rated' },
        { value: 'low', label: 'Lower Rated' }
    ]
    return(
        <>
           <Navbar />
            {/* <!-- Start --> */}
            <section className="relative lg:pt-22 pt-[74px] overflow-hidden">
                <div className="container-fluid relative overflow-hidden">
                    <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                        <iframe title="iframe" src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>

                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

                    <div className="lg:pt-36 lg:pb-48 pt-24 pb-36 shadow dark:shadow-gray-800">
                        <div className="container">
                            <div className="grid grid-cols-1 justify-center text-center">
                                <div className="relative">
                                    <div className="relative mb-5">
                                        <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl text-white">The way to Find <br /> any <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Digital</span> Content</h1>
                                    </div>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>

                                    <div className="mt-8">
                                        <Link href="/explore-one" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explore now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16 -mt-16">
                <div className="container z-1">
                    <div className="grid grid-cols-1">
                        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                            <div className="registration-form text-dark text-start">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                    <div>
                                        <label className="form-label font-medium dark:text-white">Search:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuSearch className="icons"/> 
                                            <input name="name" type="text" id="job-keyword" className="form-input w-full filter-input-box text-slate-900 dark:text-white bg-gray-50 dark:bg-slate-800 border-0 focus:ring-transparent" placeholder="Search your keaywords" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-catagory" className="form-label font-medium dark:text-white">Categories:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <AiOutlineAppstore className="icons"/> 
                                            <Select id='long-value-select' instanceId="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={options} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-min-price" className="form-label font-medium dark:text-white">Items:</label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuClock className=" icons text-base"/> 
                                            <Select id='long-value-select' instanceId="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={buyOptions} />

                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="choices-max-price" className="form-label font-medium dark:text-white">Sort By:</label>
                                        <div className="filter-search-form relative mt-2">
                                            <AiOutlineStar className="icons"/> 
                                            <Select id='long-value-select' instanceId="long-value-select" className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={rateOptions} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                    
                <div className='md:pt-24 pt-16'>
                    <Feature />
                </div>
                <CollectionTwo title="Top Collection" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!"/>
                <AuctionsTwo title="Live Auctions"
                    description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!" />

                <CreatorTwo title="Live Auctions" description="We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!" />
            </section>
            <Footer />
            <Switcher />
        </>
    )
}