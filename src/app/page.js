'use client '
import FAQAccordion from "@/components/faqaccordion"
import ImageComparison from "@/components/imagecomparison"
import ImageSlider from "@/components/imageslider"
import IntroSection from "@/components/introsection"
import ServiceCards from "@/components/servicecards"
import Services from "@/components/services"
import TailoredDesign from "@/components/tailoreddesign"
import TestimonialCarousel from "@/components/testimonialcarousel"
import WhoWeDesignFor from "@/components/whowedesignfor"
import WhyWork from "@/components/whywork"



  

  
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