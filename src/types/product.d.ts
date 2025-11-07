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