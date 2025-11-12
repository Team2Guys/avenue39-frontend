import {
  BestSelling,
  HeroSection,
  LivingSection,
  ShowroomBanner,
} from "@/components";
import HeroSplitSection from "@/components/home-ui/HerosplitSection";


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
       <HeroSplitSection
        title="Aesthetics Accessories"
        subtitle="Curated luxury accessories that make a 
        statement with elegance and style."
        buttonLabel="Shop Now"
        buttonLink="/shop"
        imageSrc="/assets/images/home/fan.webp"
        reverse
      />
      <LivingSection />
      <BestSelling />
      <ShowroomBanner
        videoSrc="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        poster="/images/showroom-poster.png"
        height="h-[300px] md:h-[500px] xl:h-[810px]"
        title="The Showroom With Visit Us"
      />
    </>
  );
}
