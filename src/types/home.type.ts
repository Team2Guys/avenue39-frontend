// Home/Herosection
export interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  highlightText?: string;
  buttonLabel?: string;
  buttonLink?: string;
  className?: string;
  interior?: boolean;
  hidebutton?: boolean;
  sofa?: boolean;
  id?:string
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
}

export interface  AccessoriesBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText?: string;
  reverse?: boolean;
}

export interface BestsellingProps {
  id: number;
  title: string;
  link: string
  category: string;
  price: string;
  image: string;
  colors: string[];
}

export interface ProductCardProps {
  item: Product;
}

export interface HotSpot {
  id: number;
  top: string;
  left: string;
  name: string;
  price: string;
  variations?: string[];
}

export interface ProductHotspotProps {
  imageSrc: string;
  hotSpots: HotSpot[];
}

export interface ShowroomBannerProps {
  videoSrc?: string; 
  poster?: string;
  height?: string; 
  title?: string;
}
export interface VideoSectionProps {
    videoSrc: string;
    posterSrc?: string;
    className?: string;
}
