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
        className={`relative z-20 text-center w-[343px] h-auto sm:w-[70%] lg:w-[477px] lg:h-[220px] ${interior ? "w-[300px] sm:w-lg md:w-2xl xl:w-5xl xl:h-[277px] " : ""} p-3`}
      >
        <div
          className={`absolute inset-0 ${interior ? "bg-white/20 border border-white/20" : "bg-black/60"} -z-10`}
        >

        </div>

        <div className={`flex flex-col justify-center items-center space-y-1  ${interior ? "w-[300px] sm:w-lg md:w-2xl xl:w-5xl xl:h-[277px] " : ""} `}>
          <h2
            className={`text-3xl xl:text-[44px] tracking-wide ${interior ? "font-normal text-[24px]" : "uppercase font-extralight"} font-alethia`}
          >
            {title}
          </h2>

          {subtitle && (
            <h3 className="text-lg md:text-2xl xl:text-[32px] font-extralight uppercase tracking-wider font-alethia">
              {subtitle}
            </h3>
          )}

          {highlightText && (
            <p
              className={`text-[20px] ${interior ? "font-alethia xl:text-[32px] font-extralight" : sofa ? "font-signatie italic text-[24px] md:text-[34px] font-extralight" : ""}`}
            >
              {highlightText}
            </p>
          )}

          {buttonLabel && buttonLink && (
            <Link
              href={buttonLink}
              className={`inline-block ${sofa ? "mt-0" : "mt-6"} border border-white w-full sm:w-[50%] py-2 uppercase text-[16px] tracking-[0.25em] hover:bg-white hover:text-black transition-all`}
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
