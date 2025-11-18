"use client";

import React, { useState } from "react";
import CustomSwiper from "../ui/CustomSwiper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { rooms } from "@/data/rooms";
import { HomeProductCard } from "./HomeProductCard";

export const LivingSection = () => {
  const tabs = Object.keys(rooms) as (keyof typeof rooms)[];
  const [activeTab, setActiveTab] = useState<keyof typeof rooms>("LIVING");

  return (
    <section className="container mx-auto relative sm:py-10 bg-white pl-2 sm:px-2">
      {/* Header + Tabs */}
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-[20px] sm:text-[36px] font-medium tracking-widest font-alethia text-left">
          {activeTab} ROOM
        </h2>

        <div className="flex justify-between sm:justify-end sm:gap-3 md:gap-6 pr-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-[14px] sm:text-[16px] font-alethia transition ${
                activeTab === tab
                  ? "text-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ CustomSwiper */}
      <CustomSwiper
        items={rooms[activeTab]}
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        prevArrow={<GoArrowLeft className="w-8 h-8" />}
        nextArrow={<GoArrowRight className="w-8 h-8" />}
        renderItem={(item) => <HomeProductCard item={item} />}
      />
    </section>
  );
};
