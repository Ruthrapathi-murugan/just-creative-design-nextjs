'use client '  
import FAQAccordion from '@/components/FAQAccordion';
import ImageComparison from '@/components/ImageComparison';
import ImageSlider from '@/components/ImageSlider';
import IntroSection from '@/components/IntroSection';
import ServiceCards from '@/components/ServiceCards';
import Services from '@/components/Services';
import TailoredDesign from '@/components/TailoredDesign';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WhoWeDesignFor from '@/components/WhoWeDesignFor';
import WhyWork from '@/components/WhyWork';
  
  export default function Home(){
    return <>
<ImageSlider/>
        <IntroSection/>
        <Services/>
      <WhyWork/>
        <ImageComparison/>
<WhoWeDesignFor/>
       <TailoredDesign/>
     <ServiceCards/>
       <TestimonialCarousel/>
       <FAQAccordion/>
    
    </>
  }