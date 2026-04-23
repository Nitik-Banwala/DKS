"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import Icons from "./common/Icons";
import { beforeslides } from "@/utils/helper";

const Before = () => {
  const swiperRef = useRef()
  return (
    <div className="w-full mx-auto relative px-8 md:px-10">

      <div
        onClick={() => (swiperRef.current?.slidePrev())}
        className="custom-prev-btn absolute left-0 md:-left-10 top-1/2 group -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer">
        <Icons icon={"prev1"} />
      </div>
      <div
        onClick={() => (swiperRef.current?.slideNext())}
        className="custom-next-btn absolute right-0 md:-right-10 top-1/2 group -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer">
        <Icons icon={"next1"} />
      </div>

      <Swiper
        className="max-w-285 w-full mx-auto grid grid-cols-2"
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 2 },
        }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {beforeslides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-60.5 sm:h-72 lg:h-84.75 relative mr-0! sm:mr-6!  ${item.before && "rounded-l-xxl"} ${item.after && "rounded-r-xxl"}  sm:rounded-xxl overflow-hidden`}
            >
              <Image
                src={item.before}
                height={558}
                width={339}
                alt={item}
                className="rouded-2xl overflow-hidden object-cover max-h-[339.1px] w-full max-w-[558.1px] object-center"
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Before;