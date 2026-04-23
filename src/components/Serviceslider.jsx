// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import Icons from "./common/Icons";
// import { services } from "@/utils/helper";

// const ServiceSlider = () => {
//   return (
//     <div className="w-full max-w-6xl  mx-auto relative px-4 md:px-0">
//       <div className="custom-prev absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-9 w-10 h-10 md:w-15 md:h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full xl:flex hidden  items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
//         <span className="text-white text-xl">
//           <Icons icon={"prev"} pathClass={"group-hover:fill-[#FAFAFA]"} />
//         </span>
//       </div>

//       <div className="custom-next xl:flex hidden absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-9 w-10 h-10 md:w-15 md:h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full  items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
//         <span className="text-white text-xl">
//           <Icons icon={"next"} pathClass={"group-hover:fill-[#FAFAFA]"} />
//         </span>
//       </div>

//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         slidesPerView={1}
//         spaceBetween={16}
//         loop={true}
//         breakpoints={{
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 24 },
//         }}
//       >
//         {services.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="border border-[#19AE1A33] flex flex-col justify-between rounded-2xl p-5 h-80.25 transition">
//               <div>
//                 <div className="mb-4">
//                   <Icons icon={item.icon} />
//                 </div>
//                 <h3 className="text-[#010101] font-semibold text-2xl leading-[130%] mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-[#010101] text-base font-normal leading-[160%] mb-4">
//                   {item.desc}
//                 </p>
//               </div>
//               <button className="text-[#19AE1A] font-medium text-sm flex items-center gap-1">
//                 Learn More <span>↗</span>
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ServiceSlider;
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
        >
         <div className="custom-butt absolute left-2 md:-left-8 xl:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group hover:bg-[#19AE1A] border-[#19AE1A] border bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow">
          <Icons icon={"prev"} pathClass={"group-hover:fill-[#FAFAFA]"} />
        </div>
        </span>

        <Swiper
          className="max-w-285 w-full mx-auto"
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
                className="relative mr-0! rounded-2xl border border-[#19AE1A33] overflow-y-hidden p-4 sm:p-5 flex flex-col
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

                <button className="text-[#19AE1A] font-medium text-sm flex items-center gap-1">
                  Learn More <span>↗</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span
      
          onClick={() => swiperRef.current?.slideNext()}
        >
           <div className="custom-butt2 absolute right-2 md:-right-8 xl:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 group border-[#19AE1A] border hover:bg-[#19AE1A] bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow">
          <Icons icon={"next"} pathClass={"group-hover:fill-[#FAFAFA]"} />
        </div>
        </span>
      </div>

      <div className="grid sm:hidden gap-5 mt-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative mr-0! rounded-2xl border border-green/20 overflow-hidden p-4 sm:p-5 flex flex-col
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
            <button className="text-[#19AE1A] font-medium text-sm flex items-center gap-1">
              Learn More <span>↗</span>
            </button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ServiceSlider;