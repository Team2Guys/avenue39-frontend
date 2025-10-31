"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/types/home.type";
import DropDown from "../Svgs/dropdown";

const HeroSection: React.FC<HeroSectionProps> = ({
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
}) => {
  return (
    <section
      className={`relative w-full sm:h-[90vh] flex items-center justify-center text-white ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover absolute inset-0 z-0"
      />

      {/* Content with Local Overlay */}
      <div className={`relative z-20 text-center w-[280px] sm:w-2xl ${sofa ? "text-start flex flex-col justify-center items-start max-w-2xl my-4 sm:h-[84vh]":""} ${interior ? "w-[300px] sm:w-lg md:w-2xl xl:w-5xl" : ""} px-4 p-5`}>
        
        {/* Overlay only behind text */}
       <div className={`absolute inset-0 ${interior ? "bg-white/10 border border-white/20 rounded-xl" : "bg-black/50"} -z-10`}></div>
        <h2 className={`text-3xl md:text-5xl  tracking-wide ${interior ? "font-light" : "uppercase font-normal "} font-alethia`}>
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-lg md:text-2xl mt-2 font-light uppercase tracking-wider font-alethia">
            {subtitle}
          </h3>
        )}
        {highlightText && (
          <p className={`text-xl mt-3 text-gray-200 ${interior || sofa ? "font-alethia" : "font-signatie italic"} text-[36px]`}>{highlightText}</p>

        )}

        {buttonLabel && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block mt-6 border border-white px-6 py-2 uppercase text-[16px] tracking-widest hover:bg-white hover:text-black transition-all"
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      {/* Down Arrow (optional decorative icon) */}
      <div className={`${hidebutton? "hidden": ""} absolute bottom-5 sm:bottom-28 z-20`}>
       <DropDown  />
      </div>
    </section>
  );
};

export default HeroSection;
