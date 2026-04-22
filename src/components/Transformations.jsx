import React from "react";
import Transformslider from "./common/Transformslider";

const Transformations = () => {
  return (
    <div className="w-full bg-[url('/assets/image/custmerbg.png')] bg-center bg-no-repeat bg-cover">

      <div className="py-[120px] lg:py-[160px] xl:py-[200px]">


        <div className="mx-auto w-full max-w-[1140px] xl:max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row justify-between gap-6">

          <h2 className="max-w-[549px] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[120%]">
            Real Transformations,{" "}
            <span className="text-[#19AE1A]">Real Customers</span>
          </h2>

          <p className="text-sm sm:text-base leading-[160%] text-[#4D4D4D] max-w-[427px]">
            Every project tells a story see what other customers say about their
            sofas, chairs, and spaces after working with DKS Upholstery.
          </p>
        </div>
        <div className="mt-12 mx-auto w-full max-w-[1140px] xl:max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-0">
          <Transformslider />
        </div>

      </div>
    </div>
  );
};

export default Transformations;