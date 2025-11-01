"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import { roomsData } from "@/data/roomsData";

const TabsSection = () => {
  const tabs = Object.keys(roomsData) as (keyof typeof roomsData)[];
  const [activeTab, setActiveTab] = useState<keyof typeof roomsData>("LIVING");

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
   <div className="relative">
  <Swiper
    modules={[Pagination]}
    pagination={{
      clickable: true,
      el: ".custom-pagination",
      renderBullet: (index, className) =>
        `<span class="${className} w-2.5 h-2.5 rounded-full inline-block bg-gray-400 opacity-70 mx-1 transition-all duration-300"></span>`,
    }}
    spaceBetween={20}
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="pb-14" 
  >
    {roomsData[activeTab].map((item) => (
      <SwiperSlide key={item.id}>
        <ProductCard item={item} />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Pagination outside the product cards */}
  <div className="custom-pagination absolute left-1/2 -translate-x-1/2  flex bottom-0 justify-center items-center gap-2 z-10"></div>
</div>

    </section>
  );
};

export default TabsSection;
