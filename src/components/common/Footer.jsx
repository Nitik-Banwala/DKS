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
      <div className="px-4 pt-[80.1px] sm:pt-[100.1px] lg:pt-[120.1px]">
        <div className="mx-auto w-full max-w-[1140.1px] xl:max-w-[1200.1px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#01010129] pb-8 lg:pb-0">

              <Image
                src="/assets/image/png/logo.png"
                alt="DKS Upholstery"
                width={160}
                height={48}
              />

              <p className="mt-4 text-sm sm:text-base text-body-text max-w-[450.1px]">
                At DKS, we specialize in expert upholstery, custom furniture,
                and repairs combining craftsmanship with care to bring new life
                to your furniture.
              </p>

              <hr className="my-6 border-[#01010129]" />
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <div className="flex gap-2 items-start">
                    <Icons icon="location" />
                    <p className="text-sm sm:text-base">
                      <a
                        href="https://www.google.com/maps?q=37+Defu+Lane+10+Singapore+539214"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Defu Industrial Estate <br />
                        Address: 37 Defu Lane 10, <br />
                        #01/41, Singapore 539214
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <span className="flex items-center gap-2 font-semibold">
                      <Icons icon="follow" /> Follow Us
                    </span>

                    <div className="flex gap-3">
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <Icons icon="insta" />
                      </Link>

                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <Icons icon="facebook" />
                      </Link>

                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <Icons icon="linkedin" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-2">
                    <Icons icon="whatsappsm" />
                    <a
                      href="https://wa.me/6598385685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base hover:underline"
                    >
                      98385685
                    </a>
                    <span>,</span>
                    <a
                      href="https://wa.me/6593832006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base hover:underline"
                    >
                      93832006
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons icon="phone" />
                    <a
                      href="tel:+6562844186"
                      className="text-sm sm:text-base hover:underline"
                    >
                      62844186
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icons icon="mail" />
                    <a
                      href="mailto:info@dksinternational.com"
                      className="text-sm sm:text-base hover:underline"
                    >
                      info@dksinternational.com
                    </a>
                  </div>

                  <a
                    href="mailto:dks.int@live.com"
                    className="text-sm sm:text-base hover:underline"
                  >
                    dks.int@live.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">

              <div className="flex flex-wrap items-center gap-y-2">
                {footernavlinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base whitespace-nowrap hover:text-green"
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
              <div className="flex flex-wrap gap-3">
                {footergallery.map((item, index) => (
                  <div
                    key={index}
                    className="w-[70.1px] h-[60.1px] sm:w-[80.1px] sm:h-[70.1px] rounded-xl overflow-hidden"
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


              <div className="flex flex-wrap items-center gap-y-2 text-sm sm:text-base">

                <Link href="#" className="hover:text-green">Reupholstery</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Covers & Cushions</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Foam & Filling</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Beds & Headboards</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Built Ins</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Custom Furniture</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Repairs</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Cleaning</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Revarnishing</Link>
                <span className="mx-2"><Icons icon="line" /></span>

                <Link href="#" className="hover:text-green">Terms of Service</Link>

              </div>

            </div>
          </div>

          <div className="mt-10 text-center">

            <div className="h-px w-full bg-linear-to-r from-transparent via-black/50 to-transparent" />

            <p className="text-sm sm:text-base py-4 text-blacky">
              Copyright © {new Date().getFullYear()} DKS Upholstery Pte Ltd | DKS International Supplier & Services. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;