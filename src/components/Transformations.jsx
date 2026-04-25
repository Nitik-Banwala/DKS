import React from "react";
import Transformslider from "./common/Transformslider";

const Transformations = () => {
  return (
    <div className="w-full bg-[url('/assets/image/png/custmerbg.png')] pt-10 lg:pt-0 bg-center bg-no-repeat bg-cover min-h-250 lg:min-h-250! flex mx-auto justify-center items-center flex-col">

   


        <div className="mx-auto w-full bg-[#EFF5ED]  max-w-[1140.1px] xl:max-w-[1200.1px] px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col md:flex-row justify-between gap-6  pl-8 lg:text-left lg:items-start pt-10 lg:pt-0">

          <h2 className="max-w-[549.1px] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-120">
            Real Transformations,{" "}
            <span className="text-green">Real Customers</span>
          </h2>

          <p className="text-sm sm:text-base leading-160 text-body-text max-w-[427.1px]">
            Every project tells a story see what other customers say about their
            sofas, chairs, and spaces after working with DKS Upholstery.
          </p>
        </div>
        <div className="lg:mt-12 mt-2 mx-auto w-full max-w-[1140.1px] xl:max-w-[1200.1px] px-4 sm:px-6 lg:px-8 xl:px-0">
          <Transformslider />
        </div>

 
    </div>
  );
};

export default Transformations;