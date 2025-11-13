"use client";

import React, { ReactNode, useEffect, useRef, useId } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Leftarrow from "../svgs/leftarrow";
import Rightarrow from "../svgs/rightarrow";

interface CustomSwiperProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  prevArrow?: ReactNode;
  nextArrow?: ReactNode;
  /** ✅ Optional custom breakpoints */
  breakpoints?: Record<number, { slidesPerView?: number; spaceBetween?: number }>;
}

const CustomSwiper = <T,>({
  items,
  renderItem,
  slidesPerView = 1.2,
  spaceBetween = 20,
  className,
  prevArrow,
  nextArrow,
  breakpoints,
}: CustomSwiperProps<T>) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  // ✅ Safe unique ID for pagination
  const uniqueId = useId();
  const paginationClass = `custom-pagination-${uniqueId}`;

  // ✅ Update navigation refs after mount
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params?.navigation) {
      const navigation = swiperRef.current.params.navigation as {
        prevEl: HTMLElement | null;
        nextEl: HTMLElement | null;
      };
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // ✅ Default responsive breakpoints
  const defaultBreakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 25 },
    1280: { slidesPerView: 4, spaceBetween: 30 },
  };

  return (
    <div className={`relative ${className || ""}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          el: `.${paginationClass}`,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={breakpoints || defaultBreakpoints} // ✅ uses prop if passed
        className="pb-8"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation + Pagination */}
      <div className="flex justify-center items-center gap-3 lg:gap-6 mt-5 py-2 rounded-full w-fit mx-auto px-6">
        <div
          ref={prevRef}
          className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
        >
          {prevArrow || <Leftarrow className="w-5 h-5" />}
        </div>

        <div className={`${paginationClass} flex justify-center items-center gap-2`}></div>

        <div
          ref={nextRef}
          className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
        >
          {nextArrow || <Rightarrow className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );
};

export default CustomSwiper;
