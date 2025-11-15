"use client";
import Link from "next/link";
import DropdownPanel from "./DropDownPanel";
import Hearticon from "@/components/svgs/hearticon";
import Carticon from "@/components/svgs/carticon";
import Account from "@/components/svgs/account";
import { cartItems, wishlistItems } from "@/data";
const UserIcons = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="lg:pr-1.5">
        <DropdownPanel
          icon={<Hearticon/>}
          title="Wishlist"
          badgeCount={wishlistItems.length}
          items={wishlistItems}
          viewLink="/wishlist"
          emptyMessage="Your wishlist is empty."
        />
      </div>
       <div className="lg:pr-1.5">
        <DropdownPanel
          icon={<Carticon/>}
          title="Cart"
          badgeCount={cartItems.length}
          items={cartItems}
          viewLink="/cart"
          emptyMessage="Your cart is empty."
        />
      </div>
      <Link href="/account" className="lg:pr-1.5">
        <Account />
      </Link>
    </div>
  );
};

export default UserIcons;
