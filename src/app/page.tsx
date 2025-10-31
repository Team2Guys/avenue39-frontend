import HeroSection from "../components/Home-UI/Home";
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
    </>
  );
}
