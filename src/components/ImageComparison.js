'use client'; // Add this if you're using Next.js App Router (Next 13+)

import dynamic from 'next/dynamic';

// Load the image slider only on the client (avoids SSR issues)
const CompareImage = dynamic(() => import('react-compare-image'), { ssr: false });

export default function ImageComparison() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white px-6 py-16 pb-0 md:pb-0" style={{
      padding: "40px 40px"
    }}>
    
      <h1
        className="text-4xl font-bold mb-4 md:text-xl"
        style={{ color: "#333", display: "flex", flexDirection: "initial", fontWeight:"400" }}
      >
        Design That Understands You
      </h1>
      

      <p className="text-base sm:text-lg text-gray-600 mb-9">
        We believe that outstanding rooms are more than just visually appealing;
        they also resonate with their owners. That's why our interior designers
        spend time learning about your habits, tastes, and needs before
        sketching a single concept.  We can bring it all together, whether you
        choose modern interior design, the simplicity of minimalist interior
        design, or something comfortable yet contemporary. Every project we
        handle is unique because it is designed around what is most important to
        you.
      </p>

      <div className="w-full max-w-5xl mx-auto text-center rounded-md overflow-hidden shadow-md sm:max- w-5xl " >

        <CompareImage
          leftImage="/before.jpg"
          rightImage="/after.jpg"
          leftImageAlt="Black & White Design"
          rightImageAlt="Color Design"
          sliderLineColor="#333"
          sliderLineWidth={1}
          sliderPositionPercentage={0.5}
        />
      </div>
    </div>
  );
}
