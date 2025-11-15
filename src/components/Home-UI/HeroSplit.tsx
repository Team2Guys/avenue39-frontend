"use client";
import Link from "next/link";
import { HeroSplitSectionProps } from "@/types/home.type";

export const HeroSplit = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  imageSrc,
  reverse = false,
  className = "",
}: HeroSplitSectionProps) => {
  return (
    <section
      className={`relative flex flex-col ${reverse ? "lg:flex-row-reverse" : ""} w-full h-[300px] sm:h-[600px] xl:h-[809px] my-2 sm:my-0 ${className}`}
    >
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-[300px] sm:h-[600px] xl:h-[809px]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Text Section */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center sm:justify-start sm:items-start ${reverse ? "flex-row-reverse" : ""}`}
      >
        <div
          className={`bg-white/80 flex flex-col justify-center items-start p-3 sm:p-10 lg:p-12 sm:h-[550px] mt-5 cx:w-[300px] cxxs:w-[343px] ${reverse ? "sm:mr-5 items-end  h-[212px]" : "sm:ml-5"}  h-[196px] sm:w-[55%] lg:w-[40%] xl:w-[598px] xl:h-[761px] text-start lg:text-left`}
        >
          <h2 className="text-[20px] sm:text-2xl  xl:text-[33px] font-light font-alethiaLight leading-tight">
            {title}
          </h2>
          {subtitle && <p className={` ${reverse ? "text-[20px] font-alethiaLight" : "text-[23px] font-alethiaLight "} mt-2`}>{subtitle}</p>}
          <Link
            href={buttonLink}
            className="inline-block font-alethiaLight bg-black text-white w-fit px-3 text-center py-2 text-[16px] sm:text-base tracking-[0.2em] uppercase transition-all mt-2 mb-1"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

