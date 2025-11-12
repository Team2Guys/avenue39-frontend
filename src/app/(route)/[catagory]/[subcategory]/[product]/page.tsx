import { Testimonial } from "@/components";
import RelatedProducts from "@/components/common/RelatedProducts";
import FooterVideoSection from '@/components/common/FooterVideoSection'
import Breadcrumb from "@/components/layout/header/Breadcrumb";
import ProductDetail from "@/components/product/ProductDetail";
import { products } from "@/data";

const Product = () => {
  return (
    <>
      <Breadcrumb slug="Category" subcategory="subcategory" title="product" />
      <ProductDetail />
      <RelatedProducts products={products} />;
      <Testimonial />
      <FooterVideoSection />
    </>
  );
};

export default Product;
