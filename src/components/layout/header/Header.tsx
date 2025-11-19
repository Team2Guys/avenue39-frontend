"use client"
import BottomBar from "./BottomBar";
import NavBar from "./Navbar";
import SubBar from "./SubBar";
import { TopBar } from "./TopBar";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopBar />
      <SubBar />
      <NavBar />
      <BottomBar />
    </div>
  );
};
