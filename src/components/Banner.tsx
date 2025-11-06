import { BannerSectionProps } from "@/types/home.type";
import Image from "next/image";
import React from "react";
export const Banner: React.FC<BannerSectionProps> = ({
  imageSrc,
  title,
  height,
  textColor,
  overlay,
  overlayColor,
  overlayOpacity,
}) => {
  return (
    <section
      className="relative w-full flex justify-center items-center overflow-hidden"
      style={{ height }}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={title || "Banner Image"}
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Centered text */}
      {title && (
        <h1
          className={`relative z-10 text-3xl md:text-5xl xl:text-[63px] font-alethia font-extralight text-white ${textColor}`}
        >
          {title}
        </h1>
      )}
    </section>
  );
};
