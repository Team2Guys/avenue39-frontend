import TabsSection from "@/components/Home-UI/TabSection";
import HeroSection from "../components/Home-UI/Home";
import ShowroomBanner from "@/components/Home-UI/ShowBanner";
import { collectionItems } from "@/data/collection";
import CollectionSlider from "@/components/Home-UI/collectionslider";
import Accessories from "@/components/Home-UI/Accessories";
import BannerSection from "@/components/Home-UI/Accessories";
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
      <HeroSection
        backgroundImage="/assets/images/home/sofabanner.webp"
        title="Elevate Your Space"
        subtitle="with Luxurious Sofas!"
        highlightText="Timeless Comfort, Effortless Style"
        buttonLabel="Shop Now"
        buttonLink="/shop"
        hidebutton
        className="flex text-start items-start justify-start"
        sofa
        id="target-section"
      />
      <TabsSection />
      
       <CollectionSlider items={collectionItems} />
       <BannerSection
        title="Aesthetics Accessories"
        description="Curated luxury accessories that make a statement with elegance and style."
        imageUrl="/assets/images/home/accessories.webp"
        link="/shop"
        buttonText="Shop Now"
    />
     <ShowroomBanner
        videoSrc="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        poster="/images/showroom-poster.png"
        height="h-[600px]"
        title="The Showroom With Visit Us"
      />
      
    </>
  );
}
