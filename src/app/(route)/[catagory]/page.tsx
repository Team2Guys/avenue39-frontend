import { CategoryPage, VideoSection } from "@/components";
import Breadcrumb from "@/components/layout/header/BreadCrumb";
const Category = () => {
  return (
    <div>
      <Breadcrumb title="Category" />
      <CategoryPage />;
      <VideoSection
        videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        title="Lorem Ipsum is simply dummy text"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        height="480px"
      />
    </div>
  );
};
export default Category;
