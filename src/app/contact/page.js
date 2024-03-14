"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

import { FiMapPin} from "react-icons/fi"
import {FaRegEnvelope} from 'react-icons/fa'
import {BsTelephone} from "react-icons/bs"

const NavbarLight = dynamic(()=>import('../components/navbar-light'));
const Footer = dynamic(()=>import('../components/footer'));
const Switcher = dynamic(()=>import('../components/switcher'));

export default function Terms(){
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
      const contactData = [
        {
            title:'Phone',
            description:'The phrasal sequence of the is now so that many campaign and benefit',
            Icon: FaRegEnvelope,
            contact:'+152 534-468-854'
        },
        {
            title:'Email',
            description:'The phrasal sequence of the is now so that many campaign and benefit',
            Icon: BsTelephone,
            contact:'contact@example.com'
        },
        {
            title:'Location',
            description:'The phrasal sequence of the is now so that many campaign and benefit',
            Icon: FiMapPin,
            contact:'View on Google map'
        }
      ]
    return(
        <>
        <NavbarLight/>
        <section className="relative table w-full py-36  bg-bottom bg-no-repeat" style={{backgroundImage:"url('/images/bg/bg1.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Contact Us</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Giglink</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Contact Us</li>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {contactData.map((item,index)=>{
                            const Icon = item.Icon
                            return(

                              <div className="text-center px-6 mt-6" key={index}>
                              <div className="w-20 h-20 bg-violet-600/5 text-violet-600 rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                  <Icon className='text-xxl'/>
                              </div>
  
                              <div className="content mt-7">
                                  <h5 className="title text-xl font-semibold">{item.title}</h5>
                                  <p className="text-slate-400 mt-3">{item.description}</p>
  
                                  <div className="mt-5">
                                      <Link href="tel:+152534-468-854" className="btn btn-link text-violet-600 hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">{item.contact}</Link>
                                  </div>
                              </div>
                          </div>
                            )
                        })}
                       
                    </div>
                </div>

                <div className="container md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6 order-1 md:order-2">
                            <Image src="/images/contact.svg" alt="" placeholder='blur' blurDataURL='/images/contact.svg' width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6 mt-8 md:mt-0 order-2 md:order-1">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                    <h3 className="mb-6 text-2xl leading-snug font-medium">Get in touch !</h3>

                                    <form method="post" name="myForm" id="myForm">
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                    <input id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Name :" />
                                                </div>
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                    <input id="email" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                    <input id="subject" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Subject :" />
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                    <textarea id="comments" className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex items-center">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        <Footer/>
        <Switcher/>
        </>
    )
}