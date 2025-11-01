"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/roomsData";
import * as FaIcons from "react-icons/fa6"; // import all FA icons
import { PiShoppingCartLight } from "react-icons/pi"; // ✅ imported cart icon

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  // Dynamically pick icon from data (optional)
  const IconComponent = item.icon
    ? (FaIcons as Record<string, React.ElementType>)[item.icon]
    : null;

  // Check if it's a "Shop Now" button
  const isShopNow = item.buttonText?.toLowerCase().includes("shop");

  return (
    <div className="relative bg-black/70 text-white overflow-hidden group shadow-lg">
      {/* Product Image */}
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={500}
        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 w-full p-5 from-black/80 via-black/50 to-transparent">
        {/* Icon + Title */}
        <div className="flex items-center gap-2 mb-2">
          {IconComponent && <IconComponent className="text-lg text-white" />}
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </div>

        <p className="text-sm mb-3 text-gray-200 xl:w-[50%]">{item.description}</p>

        {/* Button (visible only on hover) */}
        {item.buttonText && (
          <Link
            href={item.link ?? "#"}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 ${
              isShopNow
                ? "bg-white text-black hover:bg-gray-100"
                : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {/* ✅ Show cart icon only for Shop Now */}
            {isShopNow && <PiShoppingCartLight size={18} />}
            {item.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
