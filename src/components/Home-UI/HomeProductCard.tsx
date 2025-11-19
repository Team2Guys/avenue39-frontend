"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

interface ProductCardProps {
  item: Product;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  buttonText?: string;
  link?: string;
  icon?: string;
}
export const HomeProductCard= ({ item }:ProductCardProps) => {
    const [wishListed, setWishListed] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [hovered, setHovered] = useState(false);
    const IconComponent = item.icon
      ? (FaIcons as Record<string, React.ElementType>)[item.icon]
      : null;
    const isShopNow = item.buttonText?.toLowerCase().includes("shop");

      // Image auto-rotation on hover
      useEffect(() => {
        if (!hovered) {
          const timeout = setTimeout(() => setCurrentImage(0), 0);
          return () => clearTimeout(timeout);
        }
    
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % item.images.length);
        }, 1000);
    
        return () => clearInterval(interval);
      }, [hovered, item.images.length]);

  return (
    <div className="relative bg-black/70 text-white overflow-hidden group shadow-md cursor-pointer" onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
      <div className="relative h-[414px] lg:h-[609px] w-full">
        <Image
          src={item.images[currentImage]}
          alt={item.title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        {/* Wishlist & Cart Icons */}
           <div className="flex flex-col absolute right-2 top-2 sm:right-3 sm:top-3">
                  <button
                    onClick={() => setWishListed(!wishListed)}
                    className="h-9 w-9 sm:h-10 sm:w-10 bg-white/80 flex justify-center items-center rounded-md shadow hover:bg-white"
                  >
                    <FaHeart
                      className={`text-[18px] sm:text-[20px] transition-colors ${
                        wishListed ? "text-transparent stroke-[#AA7F4F] stroke-35" : "text-[#AA7F4F]"
                      }`}
                    />
                  </button>
            </div>

            <div className="absolute bottom-52 sm:bottom-40 lg:bottom-48 xl:bottom-44 left-1/2 -translate-x-1/2 flex gap-2">
          {item.images.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                index === currentImage ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5">
        <div className="flex items-start gap-2 mb-2 h-12 sm:h-6 xl:h-6 ">
          {IconComponent && <IconComponent className="text-lg text-white" />}
          <h3 className="text-[16px] font-normal font-alethia">{item.title}</h3>
        </div>

        <p className="text-[16px] mb-3 font-alethia font-extralight h-18 sm:h-12 lg:h-18 xl:h-14">{item.description}</p>

        {item.buttonText && (
          <Link
            href={item.link ?? "#"}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[16px] font-medium shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-all duration-300 
            opacity-100 translate-y-0 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0
            ${
              isShopNow
                ? "bg-white text-black hover:bg-gray-100"
                : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {isShopNow && <PiShoppingCartLight size={20} />}
            {item.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};
