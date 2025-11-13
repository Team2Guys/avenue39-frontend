import { HeroSection, LivingSection, ShowroomBanner } from "@/components";
import BestSelling from "@/components/home-ui/BestSelling";
import { DiscountBanner } from "@/components/home-ui/DiscountBanner";
import HeroSplitSection from "@/components/home-ui/HerosplitSection";
import HotspotImage from "@/components/home-ui/HotspotImage";
import ShopByCategory from "@/components/home-ui/ShopbyCategory";
import { categories } from "@/data/shopbycategory";
import { Byroom } from "@/data/shopbyroom";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/images/home/herobanner.webp"
        title="Endless Luxury"
        subtitle="Italian Inspired"
        highlightText="Furniture"
        buttonLabel="Shop Now"
        buttonLink="/shop"
        className="h-[50vh]"
        sofa
      />
      <HeroSection
        backgroundImage="/assets/images/home/interiorbanner.webp"
        title="Interiors by Avenue39"
        subtitle="BY NICK & HARRY CONDOS"
        highlightText="IN AMERICAN WHITE OAK & TURKISH TRAVERTINE"
        interior
        hidebutton
        className="h-[50vh]"
      />
      <HeroSplitSection
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
      items={Byroom}
      isSwiper={true} 
      responsiveStaticOnLarge={true} 
       />

      <LivingSection />
      <BestSelling />
      <HeroSplitSection
        title="Aesthetics Accessories"
        subtitle="Curated luxury accessories that make a 
        statement with elegance and style."
        buttonLabel="Shop Now"
        buttonLink="/shop"
        imageSrc="/assets/images/home/fan.webp"
        reverse
      />
      <HotspotImage height="h-[300px] md:h-[500px] xl:h-[810px]" imageUrl="/assets/images/home/living-room.webp" />
      <ShowroomBanner
        videoSrc="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        poster="/assets/images/bin/videoImg.webp"
        height="h-[300px] md:h-[500px] xl:h-[810px]"
        title="The Showroom With <br>Visit Us"
      />
    </>
  );
}
