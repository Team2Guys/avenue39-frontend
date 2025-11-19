import { CategoryPage, VideoSection } from "@/components";
import Breadcrumb from "@/components/layout/header/BreadCrumb";

const SubCategory = async ({ params }: { params: Promise<{ category: string; subcategory: string }> }) => {
  const {category, subcategory} = await params
  console.log(subcategory,"subcategory",category)
  return (
    <>
      <Breadcrumb slug={category} title={subcategory} />
      <CategoryPage />
      <VideoSection
        videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        title="Lorem Ipsum is simply dummy text"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        height="480px"
      />
    </>
  );
};

export default SubCategory
