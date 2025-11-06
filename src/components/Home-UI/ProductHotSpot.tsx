"use client";
import { hotSpots } from "@/data/collection";
import { ProductHotspotProps } from "@/types/home.type";
import Image from "next/image";
import React, { useState } from "react";

export const ProductHotspot: React.FC<ProductHotspotProps> = ({ imageSrc }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const toggleHotspot = (id: number) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt="Room setup"
        fill
        className="object-cover"
        priority
      />

      {/* Hotspots */}
      {hotSpots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ top: spot.top, left: spot.left }}
        >
          {/* Button */}
          <button
            onClick={() => toggleHotspot(spot.id)}
            className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
          >
            +
          </button>

          {/* Tooltip */}
          {activeHotspot === spot.id && (
            <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-lg p-3 min-w-40 z-10 border border-gray-200">
              <h4 className="font-extralight text-xs md:text-sm">{spot.name}</h4>
              
              {spot.variations && (
                <ul className="mt-1 text-xs text-gray-400 list-disc list-inside">
                  {spot.variations.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              )}
              <p className="text-sm font-extralight font-alethia">DHS <span className="text-black font-light">{spot.price}</span></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
