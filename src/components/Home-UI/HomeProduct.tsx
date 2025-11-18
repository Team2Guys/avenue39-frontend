import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";

interface ProductCardProps {
  item: Product;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  link?: string;
  icon?: string;
}
export const HomeProduct= ({ item }:ProductCardProps) => {
  const IconComponent = item.icon
    ? (FaIcons as Record<string, React.ElementType>)[item.icon]
    : null;

  const isShopNow = item.buttonText?.toLowerCase().includes("shop");

  return (
    <div className="relative bg-black/70 text-white overflow-hidden group shadow-md cursor-pointer">
      <div className="relative h-[414px] lg:h-[609px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5">
        <div className="flex items-center gap-2 mb-2">
          {IconComponent && <IconComponent className="text-lg text-white" />}
          <h3 className="text-[16px] font-normal font-alethia">{item.title}</h3>
        </div>

        <p className="text-[16px] mb-3 font-alethia font-extralight">{item.description}</p>

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
