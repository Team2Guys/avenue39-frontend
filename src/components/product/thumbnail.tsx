"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { ProductImage } from "@/types/product";

const SideBySideMagnifier = dynamic(() => import("./SideBySideMagnifier"), {
  ssr: false,
});

interface ThumbnailProps {
  images: ProductImage[];
}

const Thumbnail = ({ images = [] }: ThumbnailProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (images.length === 0) return null;

  return (
    <div>
      {/* ===== MAIN IMAGE SWIPER ===== */}
      <div className="mt-4">
        <Swiper
          modules={[Pagination, Thumbs]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          className="mainThmbnailSwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <SideBySideMagnifier
                imageSrc={img.imageUrl}
                largeImageSrc={img.imageUrl}
                zoomScale={1.5}
                inPlace
                alignTop
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== THUMBNAILS SWIPER ===== */}
      <div className="mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={40}
          slidesPerView={Math.min(images.length, 3)}
          watchSlidesProgress
          className="thumbSwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative cursor-pointer border-2 aspect-square w-full flex items-center justify-center overflow-hidden">
                <Image
                  src={img.imageUrl}
                  alt={img.altText || `Thumbnail ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  sizes="150px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Thumbnail;
