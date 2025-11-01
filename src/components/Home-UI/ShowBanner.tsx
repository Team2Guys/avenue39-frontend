// components/ShowroomBanner.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface ShowroomBannerProps {
  videoSrc?: string; // optional video source
  poster?: string; // fallback image
  height?: string; // e.g. 'h-[500px]', 'h-screen'
  title?: string;
}

const ShowroomBanner: React.FC<ShowroomBannerProps> = ({
  videoSrc,
  poster,
  height ,
  title 
}) => {
  return (
    <div className={`relative w-full h-[810px] ${height} overflow-hidden`}>
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl md:text-5xl text-center xl:text-[64px] font-light xl:w-[40%] lg:leading-20">{title}</h2>
        <button className="hidden mt-5 w-16 h-16 border-2 border-white rounded-full items-center justify-center hover:bg-white hover:text-black transition">
          {/* Play icon (triangle) */}
          <span className="ml-1 inline-block w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent"></span>
        </button>
      </div>
    </div>
  );
};

export default ShowroomBanner;
