"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { rooms } from "@/data/rooms";
import { HomeProductCard } from "./HomeProductCard";

export const LivingSection = () => {
  const tabs = Object.keys(rooms) as (keyof typeof rooms)[];
  const [activeTab, setActiveTab] = useState<keyof typeof rooms>("LIVING");

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);


  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation?.update();
      swiperInstance.pagination?.update();
    }
  }, [swiperInstance, activeTab]);

  return (
    <section
      className="relative py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/home/categories.webp')" }}
    >
      {/* Header + Tabs */}
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extralight tracking-widest text-black font-alethia text-center md:text-left">
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
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
             el: ".custom-pagination-dots",
            renderBullet: (_, className) =>
              `<span class="${className} w-2 h-2 rounded-full bg-gray-400 inline-block"></span>`,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);

            // Wait for refs to mount before attaching
            setTimeout(() => {
              if (
                prevRef.current &&
                nextRef.current &&
                paginationRef.current &&
                swiper.params.navigation &&
                swiper.params.pagination
              ) {
                if (typeof swiper.params.navigation === "object") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }

                if (typeof swiper.params.pagination === "object") {
                  swiper.params.pagination.el = paginationRef.current;
                }

                swiper.navigation.init();
                swiper.navigation.update();
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            });
          }}
        >
          {rooms[activeTab].map((item) => (
            <SwiperSlide key={item.id}>
              <HomeProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Custom Pagination + Arrows BELOW Swiper */}
      <div className="relative mt-8 flex justify-center">
        <div className="flex items-center gap-6">
          {/* Left Arrow */}
          <div
            ref={prevRef}
            className="cursor-pointer text-xl text-gray-700 hover:text-black transition-all select-none"
          >
            <GoArrowLeft className="w-8 h-8" />
          </div>

          {/* Pagination Dots */}
          <div
            ref={paginationRef}
            className="flex justify-center items-center gap-2 cursor-pointer"
          ></div>

          {/* Right Arrow */}
          <div
            ref={nextRef}
            className="cursor-pointer text-xl transition-all text-gray-700 hover:text-black select-none"
          >
            <GoArrowRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
