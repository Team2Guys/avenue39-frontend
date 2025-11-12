"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";
import { footerLinks } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-2 lg:px-0 py-8 xs:py-12">
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="relative w-[170px] h-11">
              <Image src="/assets/images/logo.webp" alt="logo" fill />
            </div>
            <p className="text-xs font-alethiaLight mt-4 leading-[160%] tracking-[0.1px]">
              This product focuses on providing organizations with tools to
              achieve financial transparency. It might include features for
              budgeting, expense tracking, financial reporting, and analytics to
              help businesses understand and communicate their financial health
              clearly.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaFacebookF size={17} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaInstagram size={17} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaPinterest size={17} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="font-alethiaLight text-base cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <p className="text-base font-alethiaLight mb-2">
              Our Supports are available to assist you
            </p>
            <p className="text-base mb-2 font-semibold">
              Timing: 9.00am to 11.00pm
            </p>
            <p className="text-base mb-2 font-semibold">Contact</p>
            <Link
              href="mailto:cs@avenue39.com"
              className="font-alethiaLight block text-base cursor-pointer mb-2"
            >
              cs@avenue39.com
            </Link>
            <Link
              href="tel:+971505974495"
              className="font-alethiaLight block text-base cursor-pointer mb-2"
            >
              +971 50 597 4495
            </Link>

            <p className="text-base mb-2 font-semibold">Showroom Address :</p>
            <p className="text-base font-alethiaLight mb-2 leading-[169%]">
              23-B 22nd St - Al Quoz - Al Quoz Industrial Area 4 - Dubai - United
              Arab Emirates
            </p>

            {/* Payment icons */}
            <div className="flex flex-wrap justify-start xl:justify-between gap-4 xl:gap-1 mt-3">
              {[
                "visa",
                "mastercard",
                "gpay",
                "applepay",
                "tabby",
                "tamara",
              ].map((icon, i) => (
                <span
                  key={i}
                  className="flex justify-center items-center w-11 h-7 border border-[#0000003D] rounded-xs"
                >
                  <Image
                    width={34}
                    height={11}
                    src={`/assets/icons/${icon}.png`}
                    alt={icon}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- MOBILE VIEW (Accordion) --- */}
        <div className="block md:hidden space-y-4">
          {/* About section (static) */}
          <div>
            <div className="relative w-[170px] h-11 mb-4">
              <Image src="/assets/images/logo.webp" alt="logo" fill />
            </div>
            <p className="text-xs font-alethiaLight leading-[160%] mb-4">
              This product focuses on providing organizations with tools to
              achieve financial transparency. It might include features for
              budgeting, expense tracking, financial reporting, and analytics to
              help businesses understand and communicate their financial health
              clearly.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-3">
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaFacebookF size={17} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaInstagram size={17} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center h-7 w-7 border border-black rounded-full"
              >
                <FaPinterest size={17} />
              </Link>
            </div>
          </div>

          <Accordion type="multiple" className="w-full mt-6">
            {footerLinks.map((section, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="font-semibold text-base" isIconArrows>
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-2">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className="font-alethiaLight text-base cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Customer Service Accordion */}
            <AccordionItem value="customer-service">
              <AccordionTrigger className="font-semibold text-base" isIconArrows>
                Customer Service
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base font-alethiaLight mb-2">
                  Our Supports are available to assist you
                </p>
                <p className="text-base mb-2 font-semibold">
                  Timing: 9.00am to 11.00pm
                </p>
                <p className="text-base mb-2 font-semibold">Contact</p>
                <Link
                  href="mailto:cs@avenue39.com"
                  className="font-alethiaLight block text-base mb-2"
                >
                  cs@avenue39.com
                </Link>
                <Link
                  href="tel:+971505974495"
                  className="font-alethiaLight block text-base mb-2"
                >
                  +971 50 597 4495
                </Link>

                <p className="text-base mb-2 font-semibold">
                  Showroom Address :
                </p>
                <p className="text-base font-alethiaLight mb-2 leading-[169%]">
                  23-B 22nd St - Al Quoz - Al Quoz Industrial Area 4 - Dubai -
                  United Arab Emirates
                </p>

                <div className="flex flex-wrap gap-3 mt-3">
                  {[
                    "visa",
                    "mastercard",
                    "gpay",
                    "applepay",
                    "tabby",
                    "tamara",
                  ].map((icon, i) => (
                    <span
                      key={i}
                      className="flex justify-center items-center w-11 h-7 border border-[#0000003D] rounded-xs"
                    >
                      <Image
                        width={34}
                        height={11}
                        src={`/assets/icons/${icon}.png`}
                        alt={icon}
                      />
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-xs font-alethia text-white bg-black h-11 w-full flex items-center justify-center">
        Copyright © 2026 Avenue39. All rights reserved.
      </div>
    </footer>
  );
}
