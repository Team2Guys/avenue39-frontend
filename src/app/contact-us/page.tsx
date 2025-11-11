import { Banner } from "@/components/Banner";
import { VideoSection } from "@/components/common";
import Breadcrumb from "@/components/common/Breadcrumb";
import Call from "@/components/ContactInfo";
const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <Banner
        imageSrc="/assets/images/bin/contact-banner.webp"
        title="Get in Touch"
        height="285px"
      />
      <Call />
      <VideoSection
        videoUrl="https://bncvidoes.s3.eu-north-1.amazonaws.com/c1.mp4"
        title="Lorem Ipsum is simply dummy text"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        height="480px"
      />
    </>
  );
};

export default ContactUs;
