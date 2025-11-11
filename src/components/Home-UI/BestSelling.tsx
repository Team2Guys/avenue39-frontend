"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { bestSelling } from "@/data/bestselling";

export const BestSelling: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;

    if (swiper.params && typeof swiper.params.navigation === "object") {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className="bg-[#f2f0ed] py-12">
      <div>
        <h2 className="text-center text-3xl tracking-[4px] mb-10 font-light uppercase text-black">
          Best Selling
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-dots",
            renderBullet: (_, className) =>
              `<span class="${className} w-2 h-2 rounded-full bg-gray-400 inline-block"></span>`,
          }}
        >
          {bestSelling.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                <div className="relative w-full h-[350px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-4 group">
                  <div className="flex justify-between">
                    <Link
                      href={item.link}
                      className="text-[15px] font-normal font-alethia text-black"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-2">
                      {item.colors.map((color, index) => (
                        <Image
                          key={index}
                          src={color}
                          alt="Color"
                          width={100}
                          height={100}
                          className="rounded-full border h-3 w-3"
                        />
                      ))}
                    </div>
                  </div>
                  <Link href="/collection" className="text-sm text-gray-400">
                    {item.category}
                  </Link>
                  <div className="relative mt-3 h-[38px]">
                    <p className="hidden sm:flex text-[15px] font-alethia font-bold text-black absolute inset-0 items-start justify-start opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      {item.price}
                    </p>

                    <button className="cursor-pointer absolute inset-0 w-full bg-black text-white flex items-center justify-center gap-2 py-2 text-sm transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                      <HiOutlineShoppingCart className="text-lg" />
                      Add to cart – {item.price}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-6 mt-10 py-2 rounded-full w-fit mx-auto px-6">
          <div
            ref={prevRef}
            className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
          >
            <GoArrowLeft className="w-8 h-8" />
          </div>

          <div className="custom-pagination-dots flex justify-center items-center gap-2"></div>

          <div
            ref={nextRef}
            className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
          >
            <GoArrowRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
