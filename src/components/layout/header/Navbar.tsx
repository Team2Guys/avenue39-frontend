"use client";
import { menuItems } from "@/data/home";
import Link from "next/link";
const NavBar = ({ className }: { className?: string }) => {
  return (
    <nav className={`${className}`}>
      <div className="container mx-auto uppercase hidden md:flex justify-center gap-3 lg:gap-4 xl:justify-between items-center py-3 text-[10px] lg:text-xs xl:text-[16px] font-alethia font-extralight">
        {menuItems.map((item, index) => (
          <p key={index}>
            <Link
              href={item.link}
              className={`hover:font-semibold transition-colors ${
                item.name.toLowerCase() === "sale" ? "text-red-500" : "text-black"
              }`}
            >
              {item.name}
            </Link>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
