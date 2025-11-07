import Breadcrumb from '@/components/Common/Breadcrumb'
import ProductDetail from '@/components/product/ProductDetail'

const Product = () => {
  return (
    <>
    <Breadcrumb slug="Category" subcategory="subcategory"  title="product"/>
    <ProductDetail />
    </>
  )
}

export default Product