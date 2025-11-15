"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/types/home.type";
import DropDown from "../svgs/dropdown";

export const HeroSection= ({
  backgroundImage,
  title,
  subtitle,
  highlightText,
  buttonLabel,
  buttonLink,
  className = "",
  interior = false,
  hidebutton = false,
  id,
}: HeroSectionProps) => {
  const handleScroll = () => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full h-[319px] sm:h-[60vh] lg:h-[809px] flex items-start justify-center pt-6 sm:pt-20 text-white mt-2 md:mt-0 ${className}`}
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover absolute inset-0 z-0 lg:h-[809px]"
      />

      <div
        className={`relative z-20 text-center  h-auto sm:w-[70%] lg:h-[220px] xl:h-60 ${interior ? "flex flex-col justify-center items-center space-y-1 w-[300px] cxxs:w-[343px] sm:w-lg md:w-2xl xl:w-4xl xl:h-[277px] " : "lg:w-[477px] xl:w-[600px] "} p-3`}
      >
        <div
          className={`absolute inset-0 ${interior ? "bg-white/70 backdrop-blur-[1px] border border-white/70" : "bg-black/60"} -z-10`}
        >

        </div>

        <div>
          <h2
            className={`xl:text-[44px] tracking-wide ${interior ? "font-normal text-[24px] text-black mb-2" : "cx:text-[24px] cxxs:text-[32px] uppercase font-extralight"} font-alethia`}
          >
            {title}
          </h2>

          {subtitle && (
            <h3 className={`text-lg md:text-2xl xl:text-[32px] font-extralight ${interior ? " text-black text-[20px]" : "cx:text-[24px] cxxs:text-[32px]"} uppercase tracking-wider font-alethia`}>
              {subtitle}
            </h3>
          )}

          {highlightText && (
            <p
              className={`font-extralight ${interior ? "font-alethia text-[20px] xl:text-[32px]  text-black" : "font-signatie italic text-[24px] md:text-[34px] mb-2"}`}
            >
              {highlightText}
            </p>
          )}

          {buttonLabel && buttonLink && (
            <Link
              href={buttonLink}
              className={`inline-block ${interior? "mt-6" : "mt-0"} border border-white w-full sm:w-[50%] py-2 uppercase text-[16px] tracking-[0.25em] hover:bg-white hover:text-black transition-all`}
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>

      <div
        className={`${hidebutton ? "hidden" : ""} cursor-pointer absolute bottom-5 lg:bottom-28 z-20`}
        onClick={handleScroll}
      >
        <DropDown />
      </div>
    </section>
  );
};
