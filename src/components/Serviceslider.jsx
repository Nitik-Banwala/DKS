
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Icons from "./common/Icons";
import Button from "./common/Button";
import { services } from "@/utils/helper";

const ServiceSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto relative px-4 md:px-0">

      <div className="hidden sm:flex justify-between w-full items-center gap-3 sm:gap-6">

        <span
          onClick={() => swiperRef.current?.slidePrev()}
          className="min-[1240px]:flex hidden"
        >
          <div className="custom-butt absolute left-2 md:-left-8 xl:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group hover:bg-green border-green border bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
            <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
          </div>
        </span>

        <Swiper
          className="max-w-285 w-full mx-auto p-4! "
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative mr-0 rounded-2xl border border-[#19AE1A33] overflow-y-hidden p-4 sm:p-5 flex flex-col
                hover:shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)] duration-300 ease-linear justify-between h-72 sm:h-80.25"
              >
                <div className="flex flex-col gap-4 h-auto">
                  <Icons icon={item.icon} />

                  <div className="flex flex-col gap-3 text-blacky">
                    <h4 className="text-lg sm:text-2xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <a
               href="#"
                  className="flex flex-row items-center gap-2 cursor-pointer text-green font-semibold text-base Poppins hover:underline w-fit"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#19AE1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span

          onClick={() => swiperRef.current?.slideNext()}
          className="min-[1240px]:flex hidden"
        >
          <div className="custom-butt2 absolute right-2 md:-right-8 xl:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group border-green border hover:bg-green bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
            <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
          </div>
        </span>
      </div>

      <div className="grid sm:hidden gap-5 mt-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative mr-0 rounded-2xl border border-green/20 overflow-hidden p-4 sm:p-5 flex flex-col
            hover:shadow-[0px_4px_25px_0px_rgba(1,1,1,0.1)] duration-300 ease-linear justify-between h-72 sm:h-80.25"
          >
            <div className="flex flex-col gap-4">
              <Icons icon={item.icon} />
              <div className="flex flex-col gap-3 text-blacky">
                <h4 className="text-lg sm:text-2xl font-semibold ">
                  {item.title}
                </h4>
                <p className=" text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
            <a
              href={item.href}
              className="flex flex-row items-center gap-2 text-green font-semibold text-base Poppins hover:underline w-fit"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#19AE1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      <div className=" min-[1240px]:hidden! sm:flex hidden justify-center gap-4 mt-6">

        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 sm:w-12 sm:h-12 group hover:bg-green border border-green bg-whity rounded-full flex items-center justify-center cursor-pointer shadow"
        >
          <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
        </div>

        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 sm:w-12 sm:h-12 group hover:bg-green border border-green bg-whity rounded-full flex items-center justify-center cursor-pointer shadow"
        >
          <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
        </div>

      </div>

    </div>
  );
};

export default ServiceSlider;