"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Icons from "./common/Icons";
import { beforeslides } from "@/utils/helper";

const Before = () => {
  return (
    <div className="w-full mx-auto relative px-8 md:px-10">

      <div className="custom-prev-btn absolute left-0 md:-left-10 top-1/2 group -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer">
        <Icons icon={"prev"} />
      </div>
      <div className="custom-next-btn absolute right-0 md:-right-10 top-1/2 group -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer">
        <Icons icon={"next"} />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        loop={true}
        spaceBetween={24}
      >
        {beforeslides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">

              <div className="relative w-full">
                <Image
                  src={item.before}
                  alt="before"
                  width={558}
                  height={339}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              <div className="relative w-full">
                <Image
                  src={item.after}
                  alt="after"
                  width={558}
                  height={339}
                  className="rounded-xl w-full object-cover"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Before;