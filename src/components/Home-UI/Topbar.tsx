import { Links } from "@/data/home";
import Link from "next/link";
export const Topbar = () => {
  return (
    <div className="border-b shadow-sm">
    <div className="container mx-auto flex justify-center items-center md:justify-start gap-5 md:items-center text-black my-2">
      {Links.map((link) => (
        <Link key={link.href} href={link.href} className="font-extralight font-alethia text-[16px]">
          {link.label}
        </Link>
      ))}
    </div>
    </div>
  );
};
