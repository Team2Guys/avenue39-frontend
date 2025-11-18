import { Testimonial } from "@/components";
import { FooterVideoSection } from "@/components/common/FooterVideoSection";
import RelatedProducts from "@/components/common/RelatedProducts";
import Breadcrumb from "@/components/layout/header/Breadcrumb";
import ProductDetail from "@/components/product/ProductDetail";
import { products } from "@/data";

const Product = async ({ params }: { params: Promise<{ category: string; subcategory: string , product: string }> }) => {
  const {category, subcategory, product} = await params
  console.log(subcategory,"subcategory",category)
  return (
    <>
      <Breadcrumb slug={category} subcategory={subcategory} title={product} />
      <ProductDetail />
      <RelatedProducts products={products} />;
      <Testimonial />
      <FooterVideoSection />
    </>
  );
};

export default Product;
