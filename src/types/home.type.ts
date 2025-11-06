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

//home video props
export interface HomeVideoProps {
    videoSrc: string;
    posterSrc?: string;
    className?: string;
}

// categories
export interface Props {
  categories: string[];
}

export interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  height?: string; 
}

// contact-banner props
export interface BannerSectionProps {
  imageSrc: string; 
  title?: string;
  height?: string; 
  textColor?: string; 
  overlay?: boolean; 
  overlayColor?: string; 
  overlayOpacity?: number; 
}

export interface ContactFormProps {
  onSuccess?: () => void;
  questionFlag?: boolean;
}

// breadcrumb
 export interface BreadcrumbProps  {
    title?: string;
    image?: string;
    slug?: string;
    subcategory?: string;
    altText?:string
    isImagetext?: boolean;
    imageClass?:string
    showTitle?:boolean
    careersName?: string;
    
  };