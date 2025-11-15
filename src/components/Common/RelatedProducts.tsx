"use client";
import React from "react";
import Image from "next/image";
import { RelatedProductsProps } from "@/types/home.type";
import Dollar from "../svgs/dollar";

import CustomSwiper from "../ui/CustomSwiper";
import { Button } from "./CommonButton";
const RelatedProducts: React.FC<RelatedProductsProps> = ({
  title = "Related Product",
  subtitle = "Indulge in the height of luxury with our best-selling furniture where unparalleled comfort meets timeless sophistication.",
  products,
}) => {
  return (
    <section className="py-12 px-4 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-[28px] font-alethia mb-2">{title}</h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>

      <CustomSwiper
        items={products}
        renderItem={(item) => (
          <div className="flex flex-col bg-gray-100 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition p-4">
            <div className="w-full h-[250px] flex justify-center items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-[16px] font-alethia">{item.title}</h3>
              <div className="flex justify-between gap-2 text-[10px] text-[#272727] mt-2 font-alethia">
                <div className="flex justify-items items-center gap-1">
                  <span className="flex justify-center items-center gap-1">
                    <Dollar className="h-3 w-3" />
                    {item.price} Regular
                  </span>
                  <span className="line-through text-gray-400 flex justify-center items-center gap-1">
                    <Dollar className="h-3 w-3" />
                    {item.regularPrice} Regular
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  {item.colorimages?.map((color, i) => (
                    <div key={i} className="w-3 h-3 rounded-full overflow-hidden">
                      <Image
                        src={color || "/placeholder.png"}
                        alt={`Color ${i + 1}`}
                        width={12}
                        height={12}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <Button
                  href="/products"
                  text="View Product"
                  className="text-black w-full text-xs bg-white lg:text-sm hover:bg-black hover:text-white transition"
                ></Button>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default RelatedProducts;
