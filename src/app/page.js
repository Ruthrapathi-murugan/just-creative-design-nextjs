'use client '

import ImageSlider from "@/components/ImageSlider"
import IntroSection from "@/components/IntroSection"
import Services from "@/components/Services"
import WhyWork from "@/components/WhyWork"
import ImageComparison from "@/components/ImageComparison"
import WhoWeDesignFor from "@/components/WhoWeDesignFor"
import TailoredDesign from "@/components/TailoredDesign"  
import ServiceCards from "@/components/ServiceCards"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import FAQAccordion from "@/components/FAQAccordion"
  



  export default function Home(){
    return <>
    
     <ImageSlider/>
    <IntroSection/>
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