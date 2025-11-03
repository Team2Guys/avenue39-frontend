import Image from "next/image";

export const HeroBanner = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[350px] lg:h-[570px]">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/About/hero-banner.webp"
          alt="Modern interior living room"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto text-center font-alethia">
        <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-[#FFFFFFB0] ml-14 lg:ml-0"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FFFFFFB0] tracking-wide mb-4">
          Elevate your everyday living
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#FFFFFFB0] font-light">
          Interiors by{" "}
          <span className="underline underline-offset-4">Avenue39</span>
        </p>
      </div>
    </section>
  );
}
