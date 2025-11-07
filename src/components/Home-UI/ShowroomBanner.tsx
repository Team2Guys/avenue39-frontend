"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Pause from "../Svgs/pause";
import { ShowroomBannerProps } from "@/types/home.type";
export const ShowroomBanner: React.FC<ShowroomBannerProps> = ({
  videoSrc,
  poster,
  height,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : poster ? (
        <Image
          src={poster}
          alt="Showroom Banner"
          fill
          className="object-cover"
        />
      ) : null}

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
        <h2 className="text-lg lg:text-4xl text-center xl:text-[64px] font-light xl:w-[40%] lg:leading-20">
          {title}
        </h2>

        <button
          onClick={handleTogglePlay}
          className="mt-4 p-3 rounded-full transition"
        >
            <Pause />
        </button>
      </div>
    </div>
  );
};
