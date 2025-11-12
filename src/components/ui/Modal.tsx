"use client";

import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className, width }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div
        ref={modalRef}
        className={`bg-white p-4 shadow-lg max-lg:max-h-[700px] max-lg:overflow-x-scroll ${width ? width : "w-[50%]"}  relative animate-fade-in animate-scale-in ${className}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-gray-600 hover:text-gray-900 cursor-pointer p-1"
          aria-label="Close modal"
        >
          <FiX className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
