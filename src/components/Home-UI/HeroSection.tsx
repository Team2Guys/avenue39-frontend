"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/types/home.type";
import DropDown from "../svgs/dropdown";

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  highlightText,
  buttonLabel,
  buttonLink,
  className = "",
  interior = false,
  hidebutton = false,
  sofa = false,
  elevate = false,
  id,
}) => {
  const handleScroll = () => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full sm:h-[90vh] flex items-center justify-center text-white ${className}`}
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover absolute inset-0 z-0"
      />

      <div
        className={`relative z-20 text-center w-[280px] sm:w-2xl ${elevate ? "text-start flex flex-col justify-center items-start max-w-2xl my-4 sm:h-[84vh]" : ""} ${interior ? "w-[300px] sm:w-lg md:w-2xl xl:w-5xl" : ""} px-4 p-5`}
      >
        <div
          className={`absolute inset-0 ${interior ? "bg-white/10 border border-white/20 rounded-xl" : "bg-black/70"} -z-10`}
        ></div>
        <div className="lg:ml-20">
          <h2
            className={`text-3xl text-gray-300 lg:text-[33px] tracking-wide ${interior ? "font-light" : "uppercase font-extralight"} font-alethia`}
          >
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-gray-300 text-lg md:text-2xl lg:text-[33px] mt-2 font-extralight uppercase tracking-wider font-alethia">
              {subtitle}
            </h3>
          )}
          {highlightText && (
            <p
              className={`text-xl mt-3 text-gray-300 ${interior ? "font-alethia text-[32px]" : sofa ? "font-signatie italic text-[44px] font-extralight" : ""} ${elevate ? "text-[23px] font-extralight" : ""}`}
            >
              {highlightText}
            </p>
          )}

          {buttonLabel && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block mt-6 border border-white bg-black px-6 py-2 uppercase text-[16px] tracking-widest hover:bg-white hover:text-black transition-all"
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
      <div
        className={`${hidebutton ? "hidden" : ""} cursor-pointer absolute bottom-5 sm:bottom-28 z-20`}
        onClick={handleScroll}
      >
        <DropDown />
      </div>
    </section>
  );
};
