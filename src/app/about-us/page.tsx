
import { HeroBanner, HomeVideo, Information, Testimonial } from "@/components";
import Breadcrumb from "@/components/layout/header/BreadCrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <HeroBanner />
      <Information />
      <HomeVideo videoSrc="https://bncmain.s3.eu-north-1.amazonaws.com/Motion+Blinds+%26+Curtains+No+Voiceover.mp4" />
      <Testimonial />
    </>
  );
};

export default AboutPage;
