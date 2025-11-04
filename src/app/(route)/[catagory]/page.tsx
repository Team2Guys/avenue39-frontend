import { CategoryPage } from "@/components/Category";
import { VideoSection } from "@/components/common/Video-section";




export default function Category(){
  return (
    <div>
        <CategoryPage />;
        <VideoSection
        videoUrl="/videos/luxury-living.mp4"
        title="Lorem Ipsum is simply dummy text"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        height="480px"
      />
    </div>
  )
}

