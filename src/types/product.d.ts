export interface SideBySideMagnifierProps {
  imageSrc: string;
  largeImageSrc: string;
  zoomScale?: number;
  inPlace?: boolean;
  alignTop?: boolean;
  altText?: string;
}

export interface ProductImage {
  imageUrl: string;
  public_id: string;
  altText?: string;
  imageIndex?: number;
  Index?: string;
}

export interface ITabbyList {
  id: number;
  para: string;
}
export interface ITabbyPayList {
  id: number;
  imageUrl: StaticImageData;
}

export interface ITamaraList {
  id: number;
  title?: string;
  para: string;
}

export interface PaymentMethodProps {
  showheading?: boolean
  installments: number
}