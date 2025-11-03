"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { roomsData } from "@/data/roomsData";

const TabsSection = () => {
  const tabs = Object.keys(roomsData) as (keyof typeof roomsData)[];
  const [activeTab, setActiveTab] = useState<keyof typeof roomsData>("LIVING");

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Re-init navigation after Swiper is ready
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      paginationRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance, activeTab]);

  return (
    <section
      className="relative py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/home/categories.webp')" }}
    >
      {/* Header + Tabs */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-3xl sm:text-4xl font-light tracking-widest text-black font-alethia text-center md:text-left">
          {activeTab} ROOM
        </h2>

        <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-[14px] sm:text-[16px] font-alethia transition ${
                activeTab === tab
                  ? "text-black font-medium underline underline-offset-4"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative container mx-auto px-4">
        <Swiper
          modules={[Pagination, Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: paginationRef.current,
            renderBullet: (_, className) =>
              `<span class="${className} w-2.5 h-2.5 rounded-full inline-block bg-gray-400 opacity-70 mx-1 transition-all duration-300"></span>`,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="pb-14"
        >
          {roomsData[activeTab].map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination bar BELOW the background section */}
      <div className="relative mt-8 flex justify-center">
        <div className="flex items-center gap-6 border border-gray-300 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
          {/* Left Arrow */}
          <div
            ref={prevRef}
            className="cursor-pointer text-xl text-gray-700 hover:text-black transition-all select-none"
          >
            ←
          </div>

          {/* Dots */}
          <div
            ref={paginationRef}
            className="custom-pagination-dots flex justify-center items-center gap-2"
          ></div>

          {/* Right Arrow */}
          <div
            ref={nextRef}
            className="cursor-pointer text-xl text-gray-700 hover:text-black transition-all select-none"
          >
            →
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
