"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText?: string;
  reverse?: boolean; // optional: for image on left side
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  description,
  imageUrl,
  link,
  buttonText = "Shop Now",
  reverse = false,
}) => {
  return (
    <section
      className={`flex flex-col bg-black text-white ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } p-6 sm:p-10 gap-5 items-center`}
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center items-center sm:items-start lg:w-[30%] text-center sm:text-left">
        <h2 className="font-alethia text-[28px] sm:text-[33px] font-extralight">
          {title}
        </h2>
        <p className="text-[15px] sm:text-[16px] font-extralight xl:w-[70%] mt-2">
          {description}
        </p>
        <Link
            href={link}
            className="inline-block mt-6 border border-white px-6 py-2 uppercase text-[16px] tracking-widest hover:bg-white hover:text-black transition-all"
          >
            {buttonText}
          </Link>
      </div>

      {/* Image Section */}
      <div className="lg:w-[70%] w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </section>
  );
};

export default BannerSection;
