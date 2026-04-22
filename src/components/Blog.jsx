"use client";

import React from "react";
import Image from "next/image";
import { blogsdata } from "@/utils/helper";
import Button from "./common/Button";

const Blog = () => {
    return (
        <section className="bg-[#F9F8F5] py-14 md:py-20 lg:py-25 xl:py-30 px-6">
            <div className="max-w-285 mx-auto">

                <div className="flex flex-col lg:flex-row justify-between items-start mb-12.5 gap-6 lg:gap-0">
                    <h2 className="text-3xl md:text-5xl font-semibold pop leading-[120%] max-w-[451.1px]">
                        Upholstery Tips,{" "}
                        <br />
                        <span className="text-[#19AE1A]">Care & Inspiration</span>
                    </h2>
                    <p className="text-base leading-[160%] font-normal pop text-[#4D4D4D] max-w-[427.1px]">
                        Refresh your sofa with the right fabrics, foam, and expert advice
                        plus a breakdown of reupholstery costs in Singapore.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {blogsdata.map((item, index) => (
                        index % 2 === 0 ? (
                            /* Image Card */
                            <div key={index} className="rounded-2xl overflow-hidden h-[310.1px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={310}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ) : (
                            /* Text Card */
                            <div key={index} className="bg-white rounded-2xl p-8 flex flex-col justify-between h-[310.1px]">
                                <div>
                                    <h3 className="font-semibold text-xl pop text-[#010101] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-base font-normal leading-[160%] pop text-[#4D4D4D]">
                                        {item.description}
                                    </p>
                                </div>
                                <a
                                    href={item.href}
                                    className="flex flex-row items-center gap-2 text-[#19AE1A] font-semibold text-base pop hover:underline w-fit"
                                >
                                    Learn More
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#19AE1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        )
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button
                        text={'Show More'}
                        className="bg-[#19AE1A] text-white font-semibold text-base pop w-[145.1px] h-12.5 rounded-full transition-colors duration-300 hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:bg-[#19AE1A] active:text-white"
                    />
                </div>

            </div>
        </section>
    );
};

export default Blog;