"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Icons from "./Icons";
import { transformslides } from "@/utils/helper";

const Transformslider = () => {
  return (
    <div className="w-full">

      <div className="mx-auto w-full max-w-[1140.1px] xl:max-w-[1200.1px] px-4 sm:px-6 lg:px-8 xl:px-0 relative">
        <div className="custom-butt max-[1240px]:hidden -ml-2 absolute left-2 md:-left-8 xl:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group hover:bg-green border-green border bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
          <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
        </div>
        <div className="custom-butt2 max-[1240px]:hidden absolute right-2 md:-right-8 xl:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group hover:bg-green border-green border bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
          <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-butt2",
            prevEl: ".custom-butt",
          }}
          loop={true}
        >
          {transformslides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full max-w-150 lg:w-1/2">
                  <Image
                    src={item.img}
                    alt="sofa"
                    width={616}
                    height={380}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                  <div className="mb-4 flex justify-center lg:justify-start">
                    <Icons icon={"bigquats"} />
                  </div>

                  <h2 className="font-semibold text-blacky text-lg md:text-xl mb-3">
                    {item.title}
                  </h2>

                  <p className="text-body-text text-sm md:text-base leading-160 mb-5 max-w-[500.1px] mx-auto lg:mx-0">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Image
                      src={"/assets/image/png/google.png"}
                      alt="google"
                      width={40}
                      height={40}
                    />
                    <span className="text-body-text text-sm md:text-base font-semibold">
                      {item.name}
                    </span>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex min-[1240px]:hidden justify-center gap-4 mt-6">

                  <div className="custom-butt w-10 h-10 sm:w-12 sm:h-12 group hover:bg-green border border-green bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
                    <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
                  </div>

                  <div className="custom-butt2 w-10 h-10 sm:w-12 sm:h-12 group hover:bg-green border border-green bg-whity rounded-full flex items-center justify-center cursor-pointer shadow">
                    <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
                  </div>

                </div>
      </div>
    </div>
  );
};

export default Transformslider;