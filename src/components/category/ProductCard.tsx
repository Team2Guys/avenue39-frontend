"use client";

import { useEffect, useState } from "react";
import { Product } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import Dollar from "../svgs/dollar";
import { FaHeart } from "react-icons/fa";
import CartIcon from "../svgs/carticon";

interface Props {
  product: Product;
}
export const ProductCard = ({ product }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isWishListed, setIsWishListed] = useState(false);
  const handleWishlistToggle = () => {
    setIsWishListed((prev) => !prev);

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]") as Product[];
    if (!isWishListed) {
      const updated = [...existingWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
    } else {
      const updated = existingWishlist.filter((p) => p.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };


    // Image auto-rotation on hover
    useEffect(() => {
      if (!hovered) {
        const timeout = setTimeout(() => setCurrentImage(0), 0);
        return () => clearTimeout(timeout);
      }
  
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [hovered, product.images.length]);
    
  return (
    <div className="relative group">
    <div className="flex flex-col gap-2 absolute z-20 right-2 top-2 sm:right-3 sm:top-3">
    <button
      onClick={handleWishlistToggle}
       className="h-9 w-9 sm:h-10 sm:w-10 bg-white/80 flex justify-center items-center rounded-sm shadow hover:bg-white"
      >
      {isWishListed ? (
        <FaHeart className="h-5 w-5 text-transparent stroke-[#AA7F4F] stroke-35" />
      ) : (
        <FaHeart className="text-[#AA7F4F] h-5 w-5 " />
      )}
    </button>
    <button className="h-9 w-9 sm:h-10 sm:w-10 bg-white/80 flex justify-center items-center rounded-sm shadow hover:bg-white">
    <CartIcon className="text-[#AA7F4F]" />
    </button>
    </div>
    
      {/* Product Image */}
      <div className="relative w-full aspect-4/4 h-[168px] sm:h-[376px] z-10 overflow-hidden cursor-pointer">
         <Image  
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={product.images[currentImage]} alt={product.title} 
          fill  
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
           {/* Pagination Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {product.images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImage ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="group-hover:shadow-2xl group-hover:bg-white bg-gray-50">
        <div className="p-1 sm:p-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <h3 className="text-[16px] font-medium font-alethia">{product.title}</h3>
            {/* <p className="text-[16px] font-medium font-alethia">{product.dimensions}</p> */}
          </div>

          <div className="flex gap-2">
            {product.colors.map((c, i) => {
              const isImage = c.startsWith("/");
              return isImage ? (
                <div key={i} className="w-4 h-4 rounded-full overflow-hidden">
                  <Image
                    src={c}
                    alt={`Color option ${i + 1}`}
                    width={190}
                    height={190}
                    className="object-cover"
                  />
                </div>
              ) : (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: c }}
                ></span>
              );
            })}
          </div>
        </div>

        {/* Prices */}
        <div className="mt-2 font-alethia">
          <p className="text-[14px] text-gray-700 flex justify-start items-center gap-1">
            <Dollar /> {product.price.toLocaleString()} Regular
          </p>
          <p className="font-bold text-[14px] flex justify-start items-center gap-1">
            <Dollar /> {product.memberPrice.toLocaleString()} Member
          </p>
        </div>

      {/* View Product Button */}
      <Link
        href={product.link}
        className="block text-[14px] font-medium mt-4 w-full group-hover:bg-black group-hover:text-white text-black bg-white text-center py-2 transition-opacity duration-300">
        Shop Now
      </Link>
      </div>
      </div>
    </div>
  );
};
