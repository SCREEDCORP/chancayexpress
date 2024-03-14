"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
const NavbarLight = dynamic(() => import("../components/navbar-light"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));

export default function CreatorProfile() {
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

  const [file, setFile] = useState("/images/avatar/1.jpg");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <NavbarLight />
      <section
        className="relative table w-full py-36  bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-4">
              <div className="group profile-pic w-[112px]">
                <input
                  id="pro-img"
                  name="profile-image"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
                <div>
                  <div className="relative h-28 w-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden ml-7">
                    <Image
                      src={file}
                      placeholder="blur"
                      blurDataURL="/images/avatar/1.jpg"
                      className="rounded-full"
                      id="profile-image"
                      alt=""
                      width={112}
                      height={112}
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500"></div>
                    <label
                      className="absolute inset-0 cursor-pointer"
                      htmlFor="pro-img"
                    ></label>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 mt-4 ">
                Actualiza tu foto de perfil, recomendamos que tu imagen sea de
                400X400px.
              </p>
            </div>

            <div className="lg:col-span-9 md:col-span-8">
              <h5 className="text-lg font-semibold mb-4 text-center">
                Informacion del Negocio:
              </h5>
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <form>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                      <label className="form-label font-medium">
                        Nombre tu Negocio :{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                        placeholder="Nombre tu Negocio:"
                        id="firstname"
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="form-label font-medium">
                        Email: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                        placeholder="Email:"
                        id="lastname"
                        name="name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mt-5">
                      <label className="form-label font-medium">
                        Descripcion:{" "}
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                        placeholder="Realiza una breve descripcion de tu negocio :"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5 "
                      value="Save Changes"
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <h5 className="text-lg font-semibold mb-5">
                      Change password :
                    </h5>
                    <form>
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <label className="form-label font-medium">
                            Old password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="Old password"
                          />
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            New password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="New password"
                          />
                        </div>

                        <div>
                          <label className="form-label font-medium">
                            Re-type New password :
                          </label>
                          <input
                            type="password"
                            className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                            placeholder="Re-type New password"
                          />
                        </div>
                      </div>

                      <button className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5">
                        Save password
                      </button>
                    </form>
                  </div>
                </div> */}
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                <h5 className="text-lg font-semibold mb-5 text-red-600">
                  Eliminar Cuenta :
                </h5>

                <p className="text-slate-400 mb-4">
                  Estas seguro que deseas elinar el perfil de tu negocio? , recuerda que se eliminaran todos los datos de tu perfil.
                </p>

                <Link
                  href="/"
                  className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
