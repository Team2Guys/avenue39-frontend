"use client";
import React, { useRef} from "react";
import Image from "next/image";
import { ShowroomBannerProps } from "@/types/home.type";
export const ShowroomBanner: React.FC<ShowroomBannerProps> = ({
  videoSrc,
  poster,
  height,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : poster ? (
        <Image src={poster} alt="Showroom Banner" fill className="object-cover" />
      ) : null}

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
        <h2 className="text-lg lg:text-4xl text-center xl:text-[64px] font-light xl:w-[40%] lg:leading-20">
          {title}
        </h2>
      </div>
    </div>
  );
};
