import React from "react";
import Before from "./Before";
import ServiceSlider from "./Serviceslider";

const After = () => {
  return (
    <div className="w-full pt-16 md:pt-30 bg-[#FAF9F5]">
      <div className="max-w-285 w-full mx-auto px-6 lg:px-0">

        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <h3 className="max-w-full md:max-w-115.25 px-2 font-semibold text-3xl md:text-5xl leading-[120%] text-[#010101]">
            Before & After:
            <span className="text-[#19AE1A]"> See the Difference </span>
          </h3>
          <p className="max-w-full md:max-w-106.75 font-normal text-base leading-[160%] text-[#4D4D4D]">
            From worn out sofas to sleek wall panels, nothing shows our work
            better than a side by side transformation. Slide to see the
            difference for yourself.
          </p>
        </div>
        <div className="mt-8 md:mt-12.5 flex flex-col items-center justify-center">
          <Before />
          <button className="w-42.25 h-12.5 text-center flex items-center justify-center bg-[#19AE1A] rounded-[245px] mt-7.5 text-[#FAFAFA] font-semibold text-base leading-[160%]">
            See More Results
          </button>
        </div>
        <div className="w-full mt-16 md:mt-30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <h3 className="max-w-full md:max-w-115.25 px-2 font-semibold text-3xl md:text-5xl leading-[120%] text-[#010101]">
            Pick from <span className="text-[#19AE1A]"> Our Services </span>
          </h3>
          <p className="max-w-full md:max-w-106.75 font-normal text-base leading-[160%] text-[#4D4D4D]">
            From worn out fabrics to flawless finishes, our expert craftsmanship
            turns tired furniture into pieces you'll be proud to showcase.
          </p>
        </div>
        <div className="mt-8 md:mt-12.5 flex flex-col items-center justify-center">
          <ServiceSlider />
          <button className="w-42.25 h-12.5 text-center flex items-center justify-center bg-[#19AE1A] rounded-[245px] mt-7.5 text-[#FAFAFA] font-semibold text-base leading-[160%]">
            View All Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default After;