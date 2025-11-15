"use client";
import Link from "next/link";
import { menuItems } from "@/data/home";

export const MobileMenus = ({ onClose }: { onClose: () => void }) => {
  return (
    <nav className="flex flex-col gap-1">
      {menuItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <Link
            onClick={onClose}
            href={item.link}
            className="flex items-center gap-2 py-3 text-[14px] font-alethia font-semibold text-gray-900 hover:text-primary transition"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};
