'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Dollar from "../svgs/dollar";
import { hotspots } from "@/data/hotspot";

export default function HotspotImage({ height, imageUrl }: { height: string, imageUrl: string }) {
    const [activeId, setActiveId] = useState(2); 

    return (
        <div className={` relative w-full ${height}`}>
            <Image
                src={imageUrl}
                alt="Living Room"
                fill
            />

            {hotspots.map((spot) => (
                <div
                    key={spot.id}
                    className="absolute group"
                    style={{ top: spot.top, left: spot.left, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setActiveId(spot.id)}
                >
                    {/* Dot */}
                    <div
                        className='w-6 h-6 flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 border-2 border-[#FFFFFFBA] bg-[#000000BA]'
                    >
                        <span className="w-1 h-1 bg-white"></span>
                    </div>

                    {/* Tooltip Info Box */}
                    <div
                        className={`absolute 
                            top-[-120%] left-[50%] translate-x-[-50%]   // 📱 Mobile: center above dot
                            md:top-[-90%] md:left-[110%] md:translate-x-0   // 📱 Small screens: small shift
                            lg:left-[120%] lg:w-[115px]                    // 💻 Desktop layout
                            w-[110px] flex bg-white transition-opacity duration-300
                            ${activeId === spot.id
                                ? "opacity-100 visible"
                                : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                            }
                        `}
                        >
                            
                        <div className="p-2 font-alethiaLight">
                            <p className="text-xs">{spot.title}</p>
                            {spot.variant && <p className="text-[8px]">{spot.variant}</p>}
                            <p className="text-sm font-bold mt-1 flex items-center gap-1"><Dollar className="w-3 h-3" />{spot.price}</p>
                        </div>
                        <Link href='#' className="border-s border-[#E1E1E1] flex justify-center items-center">
                            <GoChevronRight size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
