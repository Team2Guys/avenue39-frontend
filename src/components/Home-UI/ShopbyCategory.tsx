"use client";

import React, { useState, useEffect } from "react";
import CustomSwiper from "../ui/CustomSwiper";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface CategoryItem {
  title: string;
  imgSrc: string;
  link: string;
}

interface ShopByCategoryProps {
  title?: string;
  items: CategoryItem[];
  slidesPerView?: number;
  spaceBetween?: number;
  isSwiper?: boolean; // Toggle Swiper behavior
  responsiveStaticOnLarge?: boolean; // ✅ Use static 4-item grid on large screens
  prevArrow?: React.ReactNode;
  nextArrow?: React.ReactNode;
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  title,
  items,
  slidesPerView = 1.2,
  spaceBetween = 20,
  isSwiper = true,
  responsiveStaticOnLarge = false,
  prevArrow,
  nextArrow,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  // ✅ Detect screen width for responsive behavior
  useEffect(() => {
    if (!responsiveStaticOnLarge) return; // Only apply for second section

    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [responsiveStaticOnLarge]);

  // ✅ Decide rendering mode
  const useSwiper = isSwiper && (!responsiveStaticOnLarge || isSmallScreen);

  return (
    <section className="sm:container sm:mx-auto py-3 lg:py-12 bg-white pl-3 sm:px-2">
      <div className="text-center mb-3 lg:mb-8">
        <h2 className="text-[20px] lg:text-[36px] font-alethia mb-2 font-medium">{title}</h2>
      </div>

      {useSwiper ? (
        // ✅ Swiper mode
        <CustomSwiper
          items={items}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          prevArrow={prevArrow || <GoArrowLeft className="w-8 h-8" />}
          nextArrow={nextArrow || <GoArrowRight className="w-8 h-8" />}
          renderItem={(item) => (
            <Link
              href={item.link}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover w-full h-[337px]"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-4">
                <h3 className="text-white font-alethia text-[20px] font-light">{item.title}</h3>
              </div>
            </Link>
          )}
        />
      ) : (
        // ✅ Static 4-item grid for large screens (second section only)
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover w-full h-[337px]"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-4">
                <h3 className="text-white font-alethia text-[20px] font-light">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default ShopByCategory;
