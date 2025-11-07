"use client";
import { LinkButtonProps } from "@/types/home.type";
import Link from "next/link";
import React from "react";

const Button: React.FC<LinkButtonProps> = ({
  href,
  text,
  className = "",
  type = "button",
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
