"use client";

import { Props } from "@/types/home.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export const CategoryTabs = ({ categories }: Props) => {
  const pathname = usePathname();
  // Create clean slug from category
  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");

  // Normalize path (remove trailing slash)
  const cleanPath = pathname.endsWith("/") && pathname !== "/" 
    ? pathname.slice(0, -1) 
    : pathname;

  return (
    <div className="border-b border-gray-200 pb-2">
    <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      {/* Category Links */}
      <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide">
        <div className="flex sm:flex-wrap gap-3 min-w-max sm:min-w-0">
          {categories.map((cat) => {
            const slug = slugify(cat);
            const href = slug === "all" ? "/categories" : `/categories/${slug}`;
            const isActive = cleanPath === href;

            return (
              <Link
                key={cat}
                href={href}
                className={`relative font-extralight text-[16px] font-alethia transition-all duration-200 px-4 py-2
                  ${
                    isActive
                      ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                      : "text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100"
                  }
                `}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sort / Filter Button */}
      <div className="flex justify-end items-center gap-2 font-light cursor-pointer text-gray-600 text-[16px]">
        <span className="">Sort</span>
        <IoIosArrowDown className="text-[18px] text-black" />
        <span className="">Filter</span>
      </div>
    </div>
    </div>
  );
};


