"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ShowroomBannerProps } from "@/types/home.type";
import { FiPlay } from "react-icons/fi";
export const ShowroomBanner = ({
  videoSrc,
  poster,
  height,
  title,
}:ShowroomBannerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative w-full ${height} overflow-hidden cursor-pointer`}
      onClick={handleVideoClick}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          poster={poster}
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

      {/* Title overlay */}
      <div className="absolute inset-0 flex flex-col items-center pt-6 lg:pt-20 text-white pointer-events-none">
        <h2 className="text-lg sm:text-4xl text-center xl:text-[64px] font-light w-fit lg:leading-[120%] font-alethiaLight uppercase border sm:border-0 border-white transparent backdrop-blur-sm sm:backdrop-blur-none p-2 text-black bg-white/70" dangerouslySetInnerHTML={{ __html: title || ''}}>
        </h2>
      </div>

      {/* Play Icon Overlay (hidden when playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300">
          <span className="border-2 sm:border-[3px] border-white rounded-full flex justify-center items-center w-10 h-10 sm:w-16 sm:h-16">
            <FiPlay className="ms-1 sm:ms-1.5 text-lg sm:text-3xl" />
          </span>
        </div>
      )}
    </div>
  );
};
