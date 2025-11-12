"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Bar from "../../svgs/bar";
import UserIcons from "./Usericon";
import { MobileMenus } from "./MobileMenu";
import { Drawer } from "@/components/ui";
import SearchBar from "./Search";

const Subbar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <div className="container mx-auto flex justify-between items-center p-2 sm:px-0 border-b sm:border-b-0">
      <div className="flex justify-center items-center">
        {/* Drawer: visible only on small screens */}
        <div className="block md:hidden">
          <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={onClose}
            title={<Bar />}
            content={<MobileMenus onClose={onClose} />}
          />
        </div>

        {/* Search bar stays visible on all screens */}
        <SearchBar />
      </div>
      <Link href="/" className="">
        <Image
          className="h-[35px] w-[123px]"
          src="/assets/images/logo.webp"
          height={1000}
          width={1000}
          alt="logo"
        />
      </Link>
      <div className="">
        <UserIcons />
      </div>
    </div>
  );
};

export default Subbar;
