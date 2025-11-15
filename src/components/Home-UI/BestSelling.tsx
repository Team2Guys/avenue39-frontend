"use client";

import React from "react";
import CustomSwiper from "../ui/CustomSwiper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { bestSelling } from "@/data/bestselling";
import ProductCard from "./Bestselling/SellingCard";
export const BestSelling = () => {
  return (
    <section className="bg-[#f2f0ed] py-5 lg:py-12 pl-2 sm:px-2">
      <div>
        <h2 className="text-center text-[20px] sm:text-[36px] font-medium tracking-[4px] mb-5 lg:mb-10 uppercase text-black">
          Best Selling
        </h2>

        <CustomSwiper
          items={bestSelling}
          slidesPerView={1.2}
          spaceBetween={20}
          prevArrow={<GoArrowLeft className="w-8 h-8" />}
          nextArrow={<GoArrowRight className="w-8 h-8" />}
          renderItem={(item) => <ProductCard item={item} />}
        />
      </div>
    </section>
  );
};

