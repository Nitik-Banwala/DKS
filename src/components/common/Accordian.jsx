"use client";

import React, { useState } from "react";
import { faqdata } from "@/utils/helper";
import Button from "./Button";

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" min-h-screen pb-14  lg:py-20">
            <div className="max-w-285  mx-auto flex flex-col min-[850px]:flex-row gap-16 ">

                <div className="min-w-[280.1px] ">
                    <h2 className="text-3xl md:text-5xl font-semibold pop leading-[120%]">
                        Frequently Asked <br />
                        <span className="text-[#19AE1A]">Questions</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    {faqdata.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                                openIndex === index
                                    ? "border-[#010101] bg-[#20AE190F]"
                                    : "border-[#0101011F] bg-[#F9F8F5]"
                            }`}
                            onClick={() => toggle(index)}
                        >
                            <div className="flex flex-row justify-between  min-[850px]max-w-[665.1px] w-full items-center p-4">
                                <h3 className="font-semibold text-base pop text-[#010101]">
                                    {item.question}
                                </h3>
                                <span
                                    className={`text-xl transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="#010101"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                }`}
                            >
                                <p className="px-6 text-base font-normal leading-[160%] pop text-[#4D4D4D]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="mt-12.5">
                        <Button 
                        text={' Find More Answer'}
                        className=" font-semibold text-base pop w-[182.1px] h-[45.1px] rounded-full bg-[#19AE1A] text-[#FAFAFA] hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:bg-[#19AE1A] active:text-white transition-colors duration-300"/>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordian;