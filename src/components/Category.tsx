"use client";

import { useState } from "react";

import { productsData } from "@/data/product";
import { CategoryTabs } from "./CategoryTabs";
import { ProductCard } from "./ProductCard";

export const CategoryPage = () => {
  const categories = [
    "All",
    "Dining Tables",
    "Dining Chairs",
    "Sides Console",
    "Barstools",
    "Accessories",
  ];

  const [selected] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter by selected category
  const filteredProducts =
    selected === "All"
      ? productsData
      : productsData.filter((p) => p.category === selected);

  // Slice visible products
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Show more handler
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Show less handler
  const handleShowLess = () => {
    setVisibleCount(12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-2 lg:px-4">
        <div className="text-center font-alethia my-5 lg:my-7 uppercase text-[19px]">Dinning</div>
      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 my-5 md:mt-14">
        {/* Show More */}
        {visibleCount < filteredProducts.length && (
          <button
            onClick={handleViewMore}
           className="px-6 py-3 bg-black text-white text-[16px] xl:w-1/6 font-alethia transition-all duration-200 cursor-pointer hover:bg-black/85"
          >
            Show More
          </button>
        )}

        {/* Show Less */}
        {visibleCount > 12 && (
          <button
            onClick={handleShowLess}
           className="px-6 py-3 bg-black text-white text-[16px] xl:w-1/8 font-alethia transition-all duration-200 cursor-pointer hover:bg-black/85"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

