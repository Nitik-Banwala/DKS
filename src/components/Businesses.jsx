"use client";

import React, { useRef } from "react";
import { sliderdata } from "@/utils/helper";
import Icons from "./common/Icons";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Businesses = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="bg-[url('/assets/image/png/slider.png')]  pt-16 md:pt-30 w-full min-h-[660.1px] h-auto bg-center bg-cover overflow-hidden">

        
            <div className="flex px-4 text-center md:text-left flex-col md:flex-row max-w-285 mx-auto lg:px-2 gap-4 md:gap-0 justify-between">
                <h2 className="max-w-full md:max-w-[553.1px] text-3xl md:text-5xl font-semibold Poppins leading-120">
                    Loved by Singapore{" "}
                    <span className="text-green">Homes & Businesses</span>
                </h2>

                <p className="text-base leading-160 font-normal Poppins max-w-full md:max-w-[427.1px] text-body-text">
                    Over 100 five star reviews from customers who transformed their sofas,
                    chairs, and spaces with DKS Upholstery.
                </p>
            </div>

            <div className="mt-8 md:mt-12 relative w-full overflow-hidden pb-14">
                <div className="max-w-[1308.1px] flex justify-between">
                    <button
                        ref={prevRef}
                        className="absolute cursor-pointer group w-10 h-10 md:w-15 md:h-15 hover:bg-green flex justify-center items-center border border-green duration-300 left-2 md:left-4 top-1/2 -translate-y-1/2 md:ml-10 z-20 bg-white shadow-md rounded-full"
                    >
                        <Icons icon={"prev"} />
                    </button>

                    <button
                        ref={nextRef}
                        className="absolute cursor-pointer right-2 md:right-4 w-10 h-10 md:w-15 md:h-15 group hover:bg-green flex justify-center items-center border border-green duration-300 top-1/2 -translate-y-1/2 z-20 md:me-10 bg-white shadow-md rounded-full"
                    >
                        <Icons icon={"next"} />
                    </button>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    loop={true}
                    speed={800}
                    allowTouchMove={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            spaceBetween: 32,
                        },
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            if (!swiper.params.navigation) return;
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    className="w-full min-h-100"
                >
                    {sliderdata.map((item, index) => (
                        <SwiperSlide key={index} className="w-auto! min-h-90">
                            <div className="w-[300.1px] sm:w-[380.1px] md:w-[500.1px] h-[353.1px] bg-white p-6 md:p-10 rounded-2xl border border-[#01010129] shrink-0 relative">
                                <div className="w-full">
                                    <Icons icon={"quaats"} />

                                    <p className="text-sm md:text-base font-normal leading-160 Poppins text-blacky mt-4 md:mt-6 line-clamp-4">
                                        {item.title}
                                    </p>

                                    <div className="flex flex-row mt-4 md:mt-6 justify-between items-center">
                                        <div>
                                            <h2 className="font-semibold text-lg md:text-2xl leading-130 Poppins">
                                                {item.name}
                                            </h2>
                                            <h3 className="text-blacky leading-160 Poppins text-sm md:text-base">
                                                {item.profession}
                                            </h3>
                                        </div>

                                        <Image
                                            src={item.image}
                                            width={60}
                                            height={60}
                                            alt="dp"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row absolute bottom-6 md:bottom-10 items-center">
                                    <Image
                                        src="/assets/image/png/google.png"
                                        alt="google"
                                        width={24}
                                        height={24}
                                    />
                                    <div className="-ml-9">
                                        <Icons icon={"google"} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Businesses;