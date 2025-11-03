

import HeroSection from '@/components/about-us/HeroBanner'
import Information from '@/components/about-us/Information'
import Testimonial from '@/components/about-us/Testinmonial'
import VideoSection from '@/components/common/VideoSection'
const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <Information />
      <VideoSection videoSrc='https://bncmain.s3.eu-north-1.amazonaws.com/Motion+Blinds+%26+Curtains+No+Voiceover.mp4' />
      <Testimonial />
    </>
  )
}

export default AboutPage