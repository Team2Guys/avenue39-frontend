import { HeroSection, LivingSection, ShowroomBanner } from "@/components";
import { BestSelling } from "@/components/home-ui/BestSelling";
import { DiscountBanner } from "@/components/home-ui/DiscountBanner";
import { HeroSplit } from "@/components/home-ui/HeroSplit";
import { ShopByCategory } from "@/components/home-ui/ShopCategory";
import { SpotSection } from "@/components/home-ui/SpotSection";
import { categories } from "@/data";
import { byRoom } from "@/data/shop-by-room";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/images/home/hero-banner.webp"
        title="Endless Luxury"
        subtitle="Italian Inspired"
        highlightText="Furniture"
        buttonLabel="Shop Now"
        buttonLink="/shop"
        className="h-[50vh]"
      />
      <HeroSection
        backgroundImage="/assets/images/home/interior-banner.webp"
        title="Interiors by Avenue39"
        subtitle="BY NICK & HARRY CONDOS"
        highlightText="IN AMERICAN WHITE OAK & TURKISH TRAVERTINE"
        hide_button
        className="h-[50vh]"
        interior
      />
      <HeroSplit
        title="ELEVATE YOUR SPACE WITH LUXURIOUS SOFAS!"
        subtitle="Timeless Comfort, Effortless Style"
        buttonLabel="Shop Now"
        buttonLink="/shop"
        imageSrc="/assets/images/home/elevate.webp"
      />
     <ShopByCategory
      title="Shop by Category"
      items={categories}
      isSwiper={true}
    />

      <DiscountBanner/>
      <ShopByCategory
      title="Shop by Room"
      items={byRoom}
      isSwiper={true} 
      responsiveStaticOnLarge={true} 
       />

      <LivingSection />
      <BestSelling />
      <HeroSplit
        title="Aesthetics Accessories"
        subtitle="Curated luxury accessories that make a 
        statement with elegance and style."
        buttonLabel="Shop Now"
        buttonLink="/shop"
        imageSrc="/assets/images/home/fan.webp"
        reverse
      />
      <SpotSection height="h-[300px] md:h-[500px] xl:h-[810px]" imageUrl="/assets/images/home/living-room.webp" />
      <ShowroomBanner
        videoSrc="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        poster="/assets/images/bin/videoImg.webp"
        height="h-[300px] md:h-[500px] xl:h-[810px]"
        title="The Showroom With <br>Visit Us"
      />
    </>
  );
}
