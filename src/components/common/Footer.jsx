"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import {
  footernavlinks,
  footergallery,
} from "@/utils/helper";

const Footer = () => {
  return (
    <footer className="bg-[#F9F8F5]">

      <div className="px-4 pt-[80px] sm:pt-[100px] lg:pt-[120px]">
        <div className="mx-auto w-full max-w-[1140px] xl:max-w-[1200px]">

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#01010129] pb-8 lg:pb-0">

              <Image
                src="/assets/image/logo.png"
                alt="DKS Upholstery"
                width={160}
                height={48}
              />

              <p className="mt-4 text-sm sm:text-base text-[#4D4D4D] max-w-[450px]">
                At DKS, we specialize in expert upholstery, custom furniture,
                and repairs combining craftsmanship with care to bring new life
                to your furniture.
              </p>

              <hr className="my-6 border-[#01010129]" />

              <div className="flex flex-col sm:flex-row gap-6">

                {/* Address */}
                <div>
                  <div className="flex gap-2 items-start">
                    <Icons icon="location" />
                    <p className="text-sm sm:text-base">
                      Defu Industrial Estate <br />
                      Address: 37 Defu Lane 10, <br />
                      #01/41, Singapore 539214
                    </p>
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-4 mt-6">
                    <span className="flex items-center gap-2 font-semibold">
                      <Icons icon="follow" /> Follow Us
                    </span>

                    <div className="flex gap-3">
                      <Link href="#"><Icons icon="insta" /></Link>
                      <Link href="#"><Icons icon="facebook" /></Link>
                      <Link href="#"><Icons icon="linkedin" /></Link>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icons icon="whatsappsm" />
                    <span className="text-sm sm:text-base">98385685, 93832006</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons icon="phone" />
                    <span className="text-sm sm:text-base">62844186</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons icon="mail" />
                    <span className="text-sm sm:text-base">
                      info@dksinternational.com
                    </span>
                  </div>
                  <span className="text-sm sm:text-base">
                    dks.int@live.com
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">

              {/* NAV LINKS WITH LINES */}
              <div className="flex flex-wrap items-center gap-y-2">
                {footernavlinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base whitespace-nowrap hover:text-[#19AE1A]"
                    >
                      {link.label}
                    </Link>

                    {index < footernavlinks.length - 1 && (
                      <span className="mx-2 flex items-center">
                        <Icons icon="line" />
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <hr className="border-[#01010129]" />

              {/* GALLERY */}
              <div className="flex flex-wrap gap-3">
                {footergallery.map((item, index) => (
                  <div
                    key={index}
                    className="w-[70px] h-[60px] sm:w-[80px] sm:h-[70px] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={80}
                      height={70}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <hr className="border-[#01010129]" />

              {/* SERVICES WITH LINES */}
              <div className="flex flex-wrap items-center gap-y-2 text-sm sm:text-base">

                <Link href="#">Reupholstery</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Covers & Cushions</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Foam & Filling</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Beds & Headboards</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Built Ins</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Custom Furniture</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Repairs</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Cleaning</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Revarnishing</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#">Terms of Service</Link>

              </div>

            </div>
          </div>

          <div className="mt-10 text-center">

            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/50 to-transparent" />

            <p className="text-sm sm:text-base py-4 text-[#010101]">
              Copyright © 2025 DKS Upholstery Pte Ltd | DKS International Supplier & Services. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;