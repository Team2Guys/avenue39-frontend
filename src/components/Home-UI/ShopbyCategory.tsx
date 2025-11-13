"use client";
import CustomSwiper from "../ui/CustomSwiper";
import Image from "next/image";
import { categories } from "@/data/shopbycategory";
import Link from "next/link";

export const ShopbyCategory = ({ title = "Shop by Category" }) => {
  return (
    <section className="py-12 px-4 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-[36px] font-alethia mb-2 font-medium">{title}</h2>
      </div>

      <CustomSwiper
        items={categories}
        slidesPerView={1.2}
        spaceBetween={20}
        renderItem={(item, index) => (
          <Link
            href={item.link}
            key={index}
            className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={400}
              height={400}
              className="object-cover w-full h-[300px]"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-4">
              <h3 className="text-white text-[20px] font-light">{item.title}</h3>
            </div>
          </Link>
        )}
      />
    </section>
  );
};

export default ShopbyCategory;
