"use client";
import React from "react";
import Icons from "./common/Icons";

const TrustedExperts = () => {
  return (
    <section className="bg-[#F9F8F5]">
      
      <div className="bg-[url('/assets/image/Cta.png')] bg-no-repeat bg-cover bg-center">

        {/* ✅ Section spacing instead of fixed */}
        <div className="py-[80px] sm:py-[100px] lg:py-[120px] px-4">

          {/* ✅ Centered fixed container (like Figma) */}
          <div className="mx-auto w-full max-w-[1140px] xl:max-w-[1200px] text-center">

            <div className="max-w-[795px] mx-auto">

              {/* ✅ Responsive Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%] text-[#010101]">
                Your Trusted Upholstery{" "}
                <span className="text-[#19AE1A]">Experts</span>
                <br />
                <span className="text-[#19AE1A]">in Singapore</span>
              </h2>

              {/* ✅ Responsive Paragraph */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-[160%] text-[#4D4D4D] max-w-[729px] mx-auto">
                For over 18 years, we've perfected the art of upholstery. From
                sofas and chairs to custom built panels and commercial projects,
                every piece is crafted with premium materials and backed by our
                12 month workmanship warranty.
              </p>

              <a
                href="https://wa.me/6500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 lg:mt-10 inline-flex items-center gap-3 bg-[#19AE1A] hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:bg-[#19AE1A] active:text-white duration-300 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full"
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