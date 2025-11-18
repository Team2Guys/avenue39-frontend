"use client"
import Image from "next/image";

export const WhatsApp = () => {
  return (
    <div className="hidden sm:block fixed bottom-40 right-3 transform z-50 cursor-pointer sm:h-12 sm:w-12 xl:h-15 xl:w-15">
      <Image
        src="/assets/images/whats-app.webp"
        alt="WhatsApp"
        fill
        className="object-cover"
         onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.open("https://api.whatsapp.com/send?phone=971501945268", "_blank")
            }}
      />
    </div>
  );
};
