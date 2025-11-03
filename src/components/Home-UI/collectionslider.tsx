"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Sapori Dining Table (61x30 cm)",
    category: "Our Full Collection",
    price: "Dhs. 4,500",
    image: "/images/p1.jpg",
    colors: ["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"],
  },
  {
    id: 2,
    title: "Siberian Living Room Set",
    category: "Our Full Collection",
    price: "Dhs. 3,400",
    image: "/images/p2.jpg",
    colors: ["/images/c1.jpg", "/images/c2.jpg"],
  },
  {
    id: 3,
    title: "Siberian Living Room Set",
    category: "Our Full Collection",
    price: "Dhs. 3,400",
    image: "/images/p3.jpg",
    colors: ["/images/c1.jpg", "/images/c3.jpg"],
  },
  {
    id: 4,
    title: "Siberian Living Room Set",
    category: "Our Full Collection",
    price: "Dhs. 3,400",
    image: "/images/p4.jpg",
    colors: ["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"],
  },
   {
    id: 4,
    title: "Siberian Living Room Set",
    category: "Our Full Collection",
    price: "Dhs. 3,400",
    image: "/images/p4.jpg",
    colors: ["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"],
  },
   {
    id: 4,
    title: "Siberian Living Room Set",
    category: "Our Full Collection",
    price: "Dhs. 3,400",
    image: "/images/p4.jpg",
    colors: ["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"],
  },
  
];

const BestSelling: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // wait for refs to be available before Swiper init
  }, []);

  return (
    <section className="bg-[#f2f0ed] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl tracking-[4px] mb-10 font-light uppercase">
          Best Selling
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
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
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Fix navigation refs after mount
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-all">
                <div className="relative w-full h-[350px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-md"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>

                  <div className="flex items-center gap-2 mt-2">
                    {item.colors.map((color, index) => (
                      <Image
                        key={index}
                        src={color}
                        alt="Color"
                        width={18}
                        height={18}
                        className="rounded-full border"
                      />
                    ))}
                  </div>

                  <p className="text-[15px] font-semibold mt-2">
                    {item.price}
                  </p>

                  <button className="w-full mt-4 bg-black text-white flex items-center justify-center gap-2 py-2 text-sm hover:bg-gray-900 transition-all">
                    <HiOutlineShoppingCart className="text-lg" />
                    Add to cart – {item.price}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container with arrows */}
        <div className="flex justify-center items-center gap-6 mt-10 border border-gray-300 py-2 rounded-full w-fit mx-auto px-6">
          {/* Left Arrow */}
          <div
            ref={prevRef}
            className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
          >
            ←
          </div>

          {/* Pagination Dots */}
          <div className="custom-pagination-dots flex justify-center items-center gap-2"></div>

          {/* Right Arrow */}
          <div
            ref={nextRef}
            className="cursor-pointer text-xl text-gray-600 hover:text-black transition-all select-none"
          >
            →
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
