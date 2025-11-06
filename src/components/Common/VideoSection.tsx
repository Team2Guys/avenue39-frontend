"use client";

import { VideoSectionProps } from "@/types/home.type";
import React, { useRef, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";
export const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  title,
  description,
  height,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      className={`w-full flex flex-col md:flex-row h-[234px] mt-5 lg:mt-14 ${height}`}
    >
      <div className="relative w-full md:w-1/2">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          loop
          muted
        />
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-full transition cursor-pointer">
            {isPlaying ? (
              <LuPause  className="text-white text-3xl" />
            ) : (
              <LuPlay className="text-white text-3xl ml-1" />
            )}
          </div>
        </button>
      </div>

      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          {title}
        </h2>
        <p className="text-sm md:text-base max-w-md text-gray-300">
          {description}
        </p>
      </div>
    </section>
  );
};


