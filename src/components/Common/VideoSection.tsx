"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface VideoSectionProps {
    videoSrc: string;
    posterSrc?: string;
    className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
    videoSrc,
    posterSrc,
    className = "",
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) { 
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden mt-10 ${className}`}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={posterSrc}
                onClick={handlePlayPause}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center text-white   transition duration-200"
            >
                {!isPlaying &&
                    <div className="bg-[#FFFFFF69] w-fit h-fit p-4 rounded-full">
                        <FaPlay className="text-4xl sm:text-5xl" />
                    </div>
                }
            </button>
        </div>
    );
};

export default VideoSection;
