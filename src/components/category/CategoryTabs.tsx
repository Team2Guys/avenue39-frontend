"use client";
import { Props } from "@/types/home.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Down } from "../svgs/down";
export const CategoryTabs = ({ categories }: Props) => {
  const pathname = usePathname();
  // Create clean slug from category
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");
  // Normalize path (remove trailing slash)
  const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  return (
    <div className="">
     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

  {/* Category Links */}
  <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide">
    <div className="flex gap-3 min-w-max sm:flex-wrap sm:min-w-0">
      {categories.map((cat) => {
        const slug = slugify(cat);
        const href = slug === "all" ? "/categories" : `/categories/${slug}`;
        const isActive = cleanPath === href;
        return (
          <Link
            key={cat}
            href={href}
            className={`relative font-alethiaLight text-[16px] px-6 py-3 transition-all duration-200 
              ${
                isActive
                  ? "text-white bg-black rounded-full"
                  : "text-black border border-gray-300 rounded-full hover:bg-gray-100"
              }
            `}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  </div>

  {/* Sort & Filter Buttons */}
  <div className="flex sm:flex-row flex-wrap justify-end items-center gap-2 font-light font-alethiaLight text-[16px] px-3">
    <span className="flex justify-center items-center gap-1 border border-gray-300 py-3 px-6 rounded-md cursor-pointer">
      Sort <Down />
    </span>
    <span className="border border-gray-300 py-3 px-6 rounded-md cursor-pointer">
      Filter
    </span>
  </div>
</div>

    </div>
  );
};
