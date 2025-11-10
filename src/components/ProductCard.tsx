"use client";

import { useState } from "react";
import { Product } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Dollar from "./svgs/dollar";

interface Props{
product: Product; 
 } 
export const ProductCard = ({ product }: Props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted((prev) => !prev);

    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist") || "[]") as Product[];
    if (!isWishlisted) {
      const updated = [...existingWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
    } else {
      const updated = existingWishlist.filter((p) => p.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  return (
    <div className="bg-[#FAFAFA] rounded-xl relative transition-all p-3 hover:shadow-lg">
      <button
        onClick={handleWishlistToggle}
        className="absolute right-7 top-7 z-30 bg-white/30 rounded-md p-1 cursor-pointer"
      >
        {isWishlisted ? (
          <IoHeartSharp className="w-9 h-9 text-red-500 transition-all duration-200" />
        ) : (
          <IoHeartOutline className="w-9 h-9 transition-all duration-200" />
        )}
      </button>

      {/* Product Image */}
      <div className="relative w-full aspect-4/4 h-[408px] z-10">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Details */}
      <div className="py-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <h3 className="text-[16px] font-medium font-alethia">
              {product.title}
            </h3>
            <p className="text-[16px] font-medium font-alethia">
              {product.dimensions}
            </p>
          </div>

            <div className="flex gap-2">
            {product.colors.map((c, i) => {
            const isImage = c.startsWith("/"); 
            return isImage ? (
            <div
                key={i}
                className="w-4 h-4 rounded-full overflow-hidden"
            >
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
        <div className="mt-2">
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
          className="block text-[14px] font-medium mt-4 w-full bg-white text-black text-center py-2  hover:bg-black hover:text-white
          "
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

