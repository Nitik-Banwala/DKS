import React from "react";
import Accordian from "./common/Accordian";
import { stepsdata } from "@/utils/helper";
import Image from "next/image";
import Icons from "./common/Icons";

const Works = () => {
  return (
    <section className="w-full bg-[url('/assets/image/png/thirdbg.png')] bg-center bg-cover bg-no-repeat">

      <div className="py-14 md:py-25 lg:py-30 px-4">
        <div className="mx-auto w-full max-w-285 xl:max-w-[1200.1px]">
          <div className="flex flex-col text-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-120">
              How Our Upholstery{" "}
              <span className="text-green">Service Works</span>
            </h2>
            <p className="max-w-[730.1px] mt-4 text-sm sm:text-base">
              Getting your sofa, chair, or cushions reupholstered in Singapore
              is simple. Here’s how our 3 step process makes it easy from start
              to finish.
            </p>
          </div>

          <div className="flex flex-col items-center mt-10">
            {stepsdata.map((item, index) => (
              <div
                key={index}
                className="mt-6 sm:mt-8 hover:bg-[#19AE1A14] duration-300 group border flex flex-col sm:flex-row gap-6 sm:gap-10 border-[#19AE1A3D] w-full max-w-[900.1px] rounded-2xl overflow-hidden"
              >

                <div className="w-full sm:w-[260.1px] shrink-0">
                  <Image
                    src={item.image}
                    width={260}
                    height={260}
                    alt="works"
                    className="w-full h-full object-cover sm:rounded-l-2xl"
                  />
                </div>

                <div className="p-6 sm:py-8 sm:pr-8">

                  <div className="w-10 h-10 rounded-full border flex justify-center items-center group-hover:bg-green duration-300 border-green">
                    <p className="text-green text-lg sm:text-xl group-hover:text-white duration-300">
                      {item.step}
                    </p>
                  </div>

                  <h2 className="mt-4 text-xl sm:text-2xl lg:text-custom-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="max-w-[600.1px] mt-3 leading-160 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-8 mb-10 justify-center ">
            <button className="bg-green group w-auto cursor-pointer px-6 sm:px-8 flex items-center duration-300 gap-2.5 justify-center h-11 sm:h-12 rounded-full text-white hover:border hover:border-green hover:text-green hover:bg-white active:bg-green active:text-white">
              <Icons icon={"uplode"} /> Step 1 : Send Photo
            </button>
          </div>

        </div>
        <div className="mx-auto w-full max-w-[1140.1px] xl:max-w-[1200.1px] ">
          <Accordian />
        </div>

      </div>
    </section>
  );
};

export default Works;