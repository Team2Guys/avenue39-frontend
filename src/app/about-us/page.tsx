


import { HeroBanner, Information, Testimonial } from '@/components/about-us'
import{ HomeVideo } from '@/components/common/HomeVideo'
const AboutPage = () => {
  return (
    <>
      <HeroBanner />
      <Information />
      <HomeVideo videoSrc='https://bncmain.s3.eu-north-1.amazonaws.com/Motion+Blinds+%26+Curtains+No+Voiceover.mp4' />
      <Testimonial />
    </>
  )
}

export default AboutPage