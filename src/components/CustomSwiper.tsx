"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Leftarrow from "./svgs/leftarrow";
import Rightarrow from "./svgs/rightarrow";

interface CustomSwiperProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
}

const CustomSwiper = <T,>({
  items,
  renderItem,
  slidesPerView = 1.2,
  spaceBetween = 20,
  className,
}: CustomSwiperProps<T>) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && swiperRef.current.params.navigation) {
      const navigation = swiperRef.current.params.navigation as {
        prevEl: HTMLElement | null;
        nextEl: HTMLElement | null;
      };

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className={`relative ${className || ""}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          el: ".custom-pagination-dots",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-8"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-6 mt-10 py-2 rounded-full w-fit mx-auto px-6">
        <div
          ref={prevRef}
          className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
        >
          <Leftarrow className="w-5 h-5" />
        </div>

        <div className="custom-pagination-dots flex justify-center items-center gap-2"></div>

        <div
          ref={nextRef}
          className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
        >
          <Rightarrow className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CustomSwiper;
