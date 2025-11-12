"use client";
import Link from "next/link";
import { BreadcrumbProps } from "@/types/home.type";
const Breadcrumb = ({
  title = "",
  slug = "",
  subcategory = "",
  className = "",
  careersName = "",
}: BreadcrumbProps & { className?: string }) => {
 

  const arrow = "/";

  return (
    <div
      className={`z-20 w-full p-2 bg-white hidden sm:block border-t border-[#E2E2E2] text-[13px]  ${className}`}
    >
      <div className="container mx-auto flex items-center gap-2 sm:gap-4">
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

export default Breadcrumb;
