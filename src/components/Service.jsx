"use client";
import React from "react";
import { slides } from "@/utils/helper";
import Icons from "./common/Icons";

const Service = () => {
    const all = [...slides, ...slides];

    return (
        <div className="mt-5 Poppins px-4 bg-linear-to-b from-white to-whity">
            <div className="overflow-hidden">
                <div className="marquee flex">
                    {all.map((src, i) => (
                        <div
                            key={i}
                            className="flex-none w-[220.1px] h-[120.1px] items-center flex  mr-4 rounded-2xl overflow-hidden"
                        >
                            <img
                                src={src}
                                alt="slide"
                                draggable={false}
                                className="w-30 h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid max-w-285 mt-20 xl:grid-cols-3 md:grid-cols-2 mx-auto gap-6">
                <div className="p-5 gap-5 flex flex-row w-full rounded-2xl md:max-w-[364.1px] border hover:border-white hover:shadow-xl duration-500 border-[#19AE1A33]">
                    <div className="bg-blue rounded-full flex justify-center items-center w-15 h-15 ">
                        <Icons icon={"tick"} />
                    </div>
                    <div>
                        <h2 className="text-blacky italic text-custom-2xl font-semibold leading-120">116+</h2>
                        <p className="text-body-text leading-120 text-base">Verified Google Reviews</p>
                    </div>
                </div>
                <div className="p-5 gap-5 flex flex-row w-full rounded-2xl md:max-w-[364.1px] border hover:border-white hover:shadow-xl duration-500 border-[#19AE1A33]">
                    <div className="bg-blue rounded-full flex justify-center items-center w-15 h-15 ">
                        <Icons icon={"tick"} />
                    </div>
                    <div>
                        <h2 className="text-blacky italic text-custom-2xl font-semibold leading-120">4.9/5</h2>
                        <p className="text-body-text leading-120 text-base">Google Rating</p>
                    </div>
                </div>
                <div className="p-5 gap-5 flex flex-row w-full rounded-2xl md:max-w-[364.1px] border hover:border-white hover:shadow-xl duration-500 border-[#19AE1A33]">
                    <div className="bg-blue rounded-full flex justify-center items-center w-15 h-15 ">
                        <Icons icon={"tick"} />
                    </div>
                    <div>
                        <h2 className="text-blacky italic text-custom-2xl font-semibold leading-120">Since 2007</h2>
                        <p className="text-body-text leading-120 text-base">18+ Years in Business</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;