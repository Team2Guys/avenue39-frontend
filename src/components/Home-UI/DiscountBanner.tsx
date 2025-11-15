import Image from "next/image"
export const DiscountBanner = () => {
  return (
    <div className="h-[283px] sm:h-[400px] lg:h-[809px] w-full">
    <Image className="bg-cover h-[283px] sm:h-[400px]  lg:h-[809px] w-full" 
    src="/assets/images/home/shop/save-banner.webp" 
    alt="banner-image" 
    width={1000} 
    height={1000}/>
    </div>
  )
}
