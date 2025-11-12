"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import SearchIcon from "@/components/svgs/searchicon";
const SearchBar = ({ className }: { className?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={`${className}`}>
      <div className="hidden md:flex border border-black px-4 gap-2 p-2 items-center w-full">
        <SearchIcon  />
        <input className="outline-none w-full text-sm" type="text" />
      </div>
      <button className="md:hidden p-3" onClick={handleOpen} aria-label="Open search modal">
        <SearchIcon  />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <div className="flex items-center gap-3 border border-gray-300 rounded-full p-3">
          <SearchIcon />
          <input type="text" className="w-full outline-none text-sm" />
        </div>
      </Modal>
    </div>
  );
};

export default SearchBar;
