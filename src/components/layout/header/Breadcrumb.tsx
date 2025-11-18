"use client";
import Link from "next/link";
import { BreadcrumbProps } from "@/types/home.type";
const BreadCrumb = ({
  title = "",
  slug = "",
  subcategory = "",
  className = "",
  careersName = "",
}: BreadcrumbProps & { className?: string }) => {

  const arrow = "/";
  return (
    <div
      className={`z-20 w-full p-2 sm:block text-[13px] bg-[#F9F7F4] sm:mt-5  ${className}`}
    >
      <div className="container mx-auto flex items-center gap-1 ">
        <Link href="/" className="capitalize text-[#BFBFBF]">
          Home
        </Link>

        {slug && (
          <>
            {arrow}
            <Link href={`/${slug.toLowerCase()}/`} className="capitalize">
              {slug.replace(/-/g, " ")}
            </Link>
          </>
        )}

        {subcategory && (
          <>
            {arrow}
            {title ? (
              <Link
                href={`/${slug.toLowerCase()}/${subcategory.toLowerCase()}/`}
                className="capitalize"
              >
                {subcategory.replace(/-/g, " ")}
              </Link>
            ) : (
              <span className="capitalize  font-bold">{subcategory.replace(/-/g, " ")}</span>
            )}
          </>
        )}
        {careersName && (
          <>
            {arrow}
            {title ? (
              <Link
                href={`/${slug.toLowerCase()}/${careersName.toLowerCase()}/`}
                className="capitalize"
              >
                {careersName.replace(/-/g, " ")}
              </Link>
            ) : (
              <span className="capitalize  font-bold">{careersName.replace(/-/g, " ")}</span>
            )}
          </>
        )}

        {title && (
          <>
            {arrow}
            <span className=" font-medium capitalize">{title.replace(/-/g, " ")}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
