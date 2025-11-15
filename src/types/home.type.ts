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
  id?: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
}
export interface BestsellingProps {
  id: number;
  title: string;
  link: string;
  category: string;
  price: string;
  discountprice: string;
  images: string[];
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
export interface BreadcrumbProps {
  title?: string;
  image?: string;
  slug?: string;
  subcategory?: string;
  altText?: string;
  isImagetext?: boolean;
  imageClass?: string;
  showTitle?: boolean;
  careersName?: string;
}

// button
export interface LinkButtonProps {
  href?: string;
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

// ordersummary
export interface OrderSummaryProps {
  items: OrderItem[];
}
export interface OrderItem {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
}

// Related products
export interface ProductItem {
  id: number;
  title: string;
  price: string;
  regularPrice: string;
  image: string;
  colorimages?: string[];
}

export interface RelatedProductsProps {
  title?: string;
  subtitle?: string;
  products: ProductItem[];
}

export interface MenuItem {
  name: string;
  link?: string;
}
export interface SubmenuItem {
  name: string;
  link: string;
  mobileimage?: string;
  desktopimage?: string;
}

// Dropdownmodel
export interface DropdownPanelProps {
  icon: React.ReactNode;
  title: string;
  badgeCount?: number;
  items: {
    name: string;
    image: string;
    price?: string;
    requiredBoxes?: number;
  }[];
  viewLink?: string;
  emptyMessage?: string;
}

export interface DrawerProps {
  title: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  width?: number;
  className?: string;
}

export interface HeroSplitSectionProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonLink: string;
  imageSrc: string;
  reverse?: boolean;
  className?: string;
}

// searchprops
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  paymentModal?: boolean;
}

export interface ExtendedModalProps extends ModalProps {
  title?: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  width?: number | string;
  height?: number | string;
}

export interface ShopbyCategoryProps {
  title: string;
  imgSrc: string;
  link: string;
}
