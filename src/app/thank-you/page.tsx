import { OrderSummary, Thank, VideoSection } from "@/components";
import RelatedProducts from "@/components/common/RelatedProducts";
import Breadcrumb from "@/components/layout/header/BreadCrumb";
import { products, sampleItems } from "@/data";
const Thankyou = () => {
  return (
    <>
      <Breadcrumb title="Thank You" />
      <Thank />
      <OrderSummary items={sampleItems} />
      <RelatedProducts products={products} />;
      <VideoSection
        videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        title="Lorem Ipsum is simply dummy text"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        height="480px"
      />
    </>
  );
};

export default Thankyou;
