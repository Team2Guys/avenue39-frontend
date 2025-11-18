import { links } from "@/data/home";
import Link from "next/link";
export const TopBar = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto flex justify-center items-center md:justify-start gap-5 md:items-center text-black py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-extralight font-alethia text-[16px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
