
import { CategoryPage } from "@/components/Category"
import Breadcrumb from "@/components/common/Breadcrumb"
import { VideoSection } from "@/components/Common/VideoSection"
const SubCategory = () => {
  return (
    <>
    <Breadcrumb slug="Category" subcategory="subcategory"/>
    <CategoryPage/>
    <VideoSection
    videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
    title="Lorem Ipsum is simply dummy text"
    description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    height="480px"
          />
    </>
  )
}

export default SubCategory