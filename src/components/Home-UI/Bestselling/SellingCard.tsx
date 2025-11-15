"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Carticon from "@/components/svgs/carticon";
import { BestsellingProps } from "@/types/home.type";

export const ProductCard= ({ item }:{ item: BestsellingProps }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishListed] = useState(false);

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
    <div
      className="group bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full h-[300px] sm:h-[376px] overflow-hidden cursor-pointer">
        <Image
          src={item.images[currentImage]}
          alt={item.title}
          fill
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Wishlist & Cart Icons */}
        <div className="flex flex-col gap-2 absolute right-2 top-2 sm:right-3 sm:top-3">
          <button
            onClick={() => setWishListed(!wishlisted)}
            className="h-9 w-9 sm:h-10 sm:w-10 bg-white/80 flex justify-center items-center rounded-md shadow hover:bg-white"
          >
            <FaHeart
              className={`text-[18px] sm:text-[20px] transition-colors ${
                wishlisted ? "text-transparent stroke-[#AA7F4F] stroke-35" : "text-[#AA7F4F]"
              }`}
            />
          </button>
          <div className="h-9 w-9 sm:h-10 sm:w-10 bg-white/80 flex justify-center items-center rounded-md shadow hover:bg-white">
            <Carticon className="text-[#AA7F4F]" />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* Product Info */}
      <div className="p-3 sm:p-4 group">
        <div className="flex justify-between items-start">
          <Link
            href={item.link}
            className="text-[14px] sm:text-[15px] font-normal font-alethia text-black line-clamp-1"
          >
            {item.title}
          </Link>
        </div>
        <Link
          href="/collection"
          className="text-xs sm:text-sm text-gray-400 block mt-1"
        >
          {item.category}
        </Link>

        <div className="relative mt-3 h-[36px] sm:h-[38px]">
          <div className="flex flex-row items-start gap-3">
            <p className="text-[14px] sm:text-[16px] font-alethia font-bold text-gray-600 line-through decoration-gray-600">
              {item.price}
            </p>
            <p className="text-[14px] sm:text-[16px] font-alethia font-bold text-black">
              {item.discountprice}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="cursor-pointer absolute inset-0 w-full bg-black text-white flex items-center justify-center gap-2 py-2 text-xs sm:text-sm transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <HiOutlineShoppingCart className="text-base sm:text-lg" />
            Add to cart – {item.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
