"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { products } from "@/data/relatedproduct";
import Dollar from "../Svgs/dollar";

const ProductSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        className="matchProduct-slider"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="pt-12">
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="relative w-[110px] h-[110px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="flex flex-col justify-between">
                {/* Product Title */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold">{item.title}</h3>

                  {/* Prices */}
                  <div className="flex items-center space-x-3 text-[13px]">
                    <span className="text-gray-400 line-through flex items-center gap-1"><Dollar className="w-4 h-4 invert-75" /> {item.regularPrice}
                    </span>
                    <span className="text-black font-bold flex items-center gap-1"><Dollar className="w-4 h-4" />{item.price}
                    </span>
                  </div>
                </div>
                {/* Add to Cart */}
                <button className="border-b border-black pb-0.5 text-sm font-bold w-fit">
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
