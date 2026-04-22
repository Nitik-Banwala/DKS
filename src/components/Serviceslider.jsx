"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Icons from "./common/Icons";
import { services } from "@/utils/helper";

const ServiceSlider = () => {
  return (
    <div className="w-full max-w-6xl  mx-auto relative px-4 md:px-0">
      <div className="custom-prev absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-9 w-10 h-10 md:w-15 md:h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
        <span className="text-white text-xl">
          <Icons icon={"prev"} pathClass={"group-hover:fill-[#FAFAFA]"} />
        </span>
      </div>

      <div className="custom-next absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-9 w-10 h-10 md:w-15 md:h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
        <span className="text-white text-xl">
          <Icons icon={"next"} pathClass={"group-hover:fill-[#FAFAFA]"} />
        </span>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-[#19AE1A33] flex flex-col justify-between rounded-2xl p-5 h-80.25 transition">
              <div>
                <div className="mb-4">
                  <Icons icon={item.icon} />
                </div>
                <h3 className="text-[#010101] font-semibold text-2xl leading-[130%] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#010101] text-base font-normal leading-[160%] mb-4">
                  {item.desc}
                </p>
              </div>
              <button className="text-[#19AE1A] font-medium text-sm flex items-center gap-1">
                Learn More <span>↗</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;