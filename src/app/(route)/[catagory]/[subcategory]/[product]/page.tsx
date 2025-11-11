import { Testimonial } from "@/components/about-us";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/RelatedProducts";
import { products } from "@/data/relatedproduct";

const Product = () => {
  return (
    <>
      <Breadcrumb slug="Category" subcategory="subcategory" title="product" />
      <ProductDetail />
      <RelatedProducts products={products} />;
      <Testimonial />
    </>
  );
};

export default Product;
