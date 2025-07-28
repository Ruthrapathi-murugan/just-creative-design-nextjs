 'use client ';
import ImageSlider from '@/components/imageslider';
import IntroSection from '@/components/introsection';
import Services from '@/components/services';
import WhyWork from '@/components/whywork';
import ImageComparison from '@/components/imagecomparison';
import WhoWeDesignFor from '@/components/whowedesignfor';
import TailoredDesign from '@/components/tailoreddesign';
import ServiceCards from '@/components/servicecards';
import TestimonialCarousel from '@/components/testimonialcarousel';
import FAQAccordion from '@/components/faqaccordion';

export default function Hompage() {
  return (
    <>
      <ImageSlider />
      <IntroSection />
      <Services />
      <WhyWork />
      <ImageComparison />
      <WhoWeDesignFor />
      <TailoredDesign />
      <ServiceCards />
      <TestimonialCarousel />
      <FAQAccordion />
    </>
  );
}
