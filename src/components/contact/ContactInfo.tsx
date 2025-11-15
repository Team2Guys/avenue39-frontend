"use client";
import { contactDetails } from "@/data/contact";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
export const ContactInfo = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-5 mt-3 lg:mt-5 xl:my-7 px-2">
        <div className="space-y-3 lg:space-y-8 text-[14px] lg:text-[16px] font-alethia w-full lg:w-[70%] xl:w-[50%]">
          <h2 className="text-[16px] font-alethia lg:text-[26px]">
            We are always here to help you
          </h2>
          <ContactForm />
        </div>

        <div className="space-y-4 lg:space-y-6 xl:space-y-10 mb-7 lg:mt-3 xl:w-[50%]">
          {contactDetails.map(({ icon: Icon, title, content, type, link }, index) => (
            <div key={index} className="flex items-start gap-4">
              <Icon
                className={`${
                  index === 0 ? "h-9 w-9 lg:h-10 lg:w-10" : "h-6 w-6 lg:h-10 lg:w-10"
                } text-[#2E2E2E]`}
              />

              <div className="lg:space-y-2">
                <h3 className="font-alethia text-[16px] lg:text-[20px] text-[#2E2E2E]">{title}</h3>

                {type === "link" ? (
                  <Link
                    href={link!}
                    className="font-alethia text-[12px] lg:text-[16px] text-[#727272]"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="font-alethia text-[12px] lg:text-[16px] text-[#727272]">
                    {content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

