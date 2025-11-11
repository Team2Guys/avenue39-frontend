"use client";
import Link from "next/link";
import SearchBar from "./Search";
import Image from "next/image";
import UserIcons from "./Usericon";
import { Drawer } from "../Drawer";
import { useState } from "react";
import { MobileMenus } from "../MobileMenu";
import Bar from "../Svgs/bar";

const Subbar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <div className="container mx-auto flex justify-between items-center p-2 lg:my-5 shadow md:shadow-none">
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
