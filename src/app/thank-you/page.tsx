import Breadcrumb from "@/components/common/Breadcrumb"
import { VideoSection } from "@/components/common/VideoSection"
import { OrderSummary } from "@/components/OrderSummary"

import { Thank } from "@/components/Thank"
import { sampleItems } from "@/data/order"

const Thankyou = () => {
  return (
    <>
    <Breadcrumb title='Thank You'/>
    <Thank/>
    <OrderSummary items={sampleItems} />
    <VideoSection
    videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
    title="Lorem Ipsum is simply dummy text"
    description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    height="480px"
    />
    </>
  )
}

export default Thankyou 