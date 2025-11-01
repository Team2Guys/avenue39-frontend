"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export interface CollectionItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  price: string;
  color?: string;
}

interface CollectionSliderProps {
  items: CollectionItem[];
}
const CollectionSlider: React.FC<CollectionSliderProps> = ({ items }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="py-10 bg-gray-50">
      <div className="px-4 sm:px-0">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-[48px] text-gray-900 font-extralight">
            Best Selling
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300 group relative rounded-md">
                  <div className="block pb-7">
                    {/* Adjust image height for mobile */}
                    <div className="relative h-[320px] sm:h-[400px] md:h-[478px] w-full overflow-hidden">
                      <Link href={item.link}>
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </div>

                    {/* Product Info */}
                    <div className="p-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xs sm:text-sm md:text-[12px] font-alethia">
                          {item.title}
                        </h3>
                        {item.color && (
                          <div className="h-5 w-5 rounded-full border border-gray-200 overflow-hidden">
                            {/* If color is an image URL */}
                            {item.color.endsWith(".jpg") ||
                            item.color.endsWith(".png") ? (
                              <Image
                                src={item.color}
                                alt="color"
                                width={20}
                                height={20}
                                className="object-cover"
                              />
                            ) : (
                              <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: item.color }}
                              ></div>
                            )}
                          </div>
                        )}
                      </div>

                      <Link
                        className="font-alethia font-light text-gray-400 text-xs sm:text-sm"
                        href="/collection"
                      >
                        Our Full Collection
                      </Link>
                      <p className="text-sm sm:text-base font-medium">{item.price}</p>

                      {/* Add to Cart Button */}
                      <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black text-white py-2 w-full flex justify-center items-center gap-2 text-xs sm:text-sm cursor-pointer">
                          <HiOutlineShoppingCart />
                          Add to Cart - {item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows (hidden on mobile) */}
          <div
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoArrowLeft size={24} />
          </div>
          <div
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoArrowRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSlider;
