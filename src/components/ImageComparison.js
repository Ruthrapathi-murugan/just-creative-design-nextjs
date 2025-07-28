'use client';

import dynamic from 'next/dynamic';
import { ChevronsLeftRight } from 'lucide-react';
import { useEffect } from 'react';
const CompareImage = dynamic(() => import('react-compare-image'), { ssr: false });

function CustomHandle() {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-md bg-[#382222] hover:scale-110 transition-transform duration-200">
      {/* Left Arrow */}
     <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-md bg-[#382222] hover:scale-110 transition-transform duration-200">
      <ChevronsLeftRight size={18} color="white" />
    </div>
    </div>
  );
}

export default function ImageComparison() {
  useEffect(() => {
    const imgs = document.querySelectorAll('.ReactCompareImage img');
    imgs.forEach((img) => {
      img.style.objectFit = 'cover'; 
      img.style.width = '100%';
      img.style.height = '100%';
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white px-3 py-4 pb-0">
      <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-[2.5rem] mb-2 text-[#222] font-helvetica px-4 py-0">
        Design That Understands You
      </h1>

      <p className="text-[18px] text-base sm:text-lg md:text-2xl lg:text-2xl text-gray-600 mb-9 px-4">
     We believe that outstanding rooms are more than just visually appealing; they also resonate with their owners. That's why our interior designers spend time learning about your habits, tastes, and needs before sketching a single concept.  We can bring it all together, whether you choose modern interior design, the simplicity of minimalist interior design, or something comfortable yet contemporary. Every project we handle is unique because it is designed around what is most important to you.
      </p>

      <div className="w-full max-w-5xl mx-auto text-center rounded-md overflow-hidden shadow-md">
        <div className="relative w-full" style={{ aspectRatio: '16/8' }}>
          <CompareImage
            leftImage="./before1.jpg"
            rightImage="./after1.jpg"
            leftImageAlt="Before Design"
            rightImageAlt="After Design"
            sliderLineColor="white"
            sliderLineWidth={2}
            sliderPositionPercentage={0.5}
            handle={<CustomHandle />}
          />
        </div>
      </div>
    </div>
  );
}
