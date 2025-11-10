import { Testimonial } from '@/components/about-us'
import Breadcrumb from '@/components/Common/Breadcrumb'
import FooterVideoSection from '@/components/Common/FooterVideoSection'
import ProductDetail from '@/components/product/ProductDetail'
import RelatedProducts from '@/components/RelatedProducts'
import { products } from '@/data/relatedproduct'

const Product = () => {
  return (
    <>
      <Breadcrumb slug="Category" subcategory="subcategory" title="product" />
      <ProductDetail />
      <RelatedProducts products={products} />;
      <Testimonial />
      <FooterVideoSection />
    </>
  )
}

export default Product