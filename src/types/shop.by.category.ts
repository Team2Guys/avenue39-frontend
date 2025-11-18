export interface CategoryItem {
  title: string;
  imgSrc: string;
  link: string;
}

export interface ShopByCategoryProps {
  title?: string;
  items: CategoryItem[];
  slidesPerView?: number;
  spaceBetween?: number;
  isSwiper?: boolean; 
  responsiveStaticOnLarge?: boolean; 
  prevArrow?: React.ReactNode;
  nextArrow?: React.ReactNode;
}