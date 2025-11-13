import { categories } from "@/data/shopbycategory";
import Image from "next/image";

const FurnitureCategorySection: React.FC = () => {
  return (
    <section className="py-12 px-4 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-[280px]">
              <Image
                src={category.imgSrc}
                alt={category.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay + Title */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-light tracking-wide">
              {category.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FurnitureCategorySection;
