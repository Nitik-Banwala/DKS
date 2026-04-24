"use client";
import React from "react";
import Icons from "./common/Icons";

const TrustedExperts = () => {
  return (
    <section className="bg-[#F9F8F5]">
      
      <div className="bg-[url('/assets/image/png/Cta.png')] bg-no-repeat bg-cover bg-center">


        <div className="py-[80.1px] sm:py-[100.1px] lg:py-[120.1px] px-4">

          <div className="mx-auto w-full max-w-[1140.1px] xl:max-w-[1200.1px] text-center">

            <div className="max-w-[795.1px] mx-auto">

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-120 text-blacky">
                Your Trusted Upholstery{" "}
                <span className="text-green">Experts</span>
                <br />
                <span className="text-green">in Singapore</span>
              </h2>

      
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-160 text-body-text max-w-[729.1px] mx-auto">
                For over 18 years, we've perfected the art of upholstery. From
                sofas and chairs to custom built panels and commercial projects,
                every piece is crafted with premium materials and backed by our
                12 month workmanship warranty.
              </p>

              <a
                href="https://wa.me/6500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 lg:mt-10 inline-flex items-center gap-3 bg-green hover:bg-whity border-transparent border hover:border-green hover:text-green active:bg-green active:text-white duration-300 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full"
              >
                <Icons icon="whatsapp" />
                WhatsApp Us Now!
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedExperts;