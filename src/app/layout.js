// app/layout.js
import './globals.css'
import Navbar from '../components/Navbar'
import ImageSlider from '@/components/ImageSlider';
import IntroSection from '@/components/IntroSection';
import Services from '@/components/Services';
import WhyWork from '@/components/WhyWork';
import ImageComparison from '@/components/ImageComparison';
import WhoWeDesignFor from '@/components/WhoWeDesignFor';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Just Creative Design |Top Interior Designers in Bangalore | Custom Home Interiors</title>
        <meta name="description" content="Discover premium interior design services in Bangalore. My App offers personalized home and office interiors tailored to your lifestyle. Get a free consultation today!" />
        <meta name="keywords" content="Interior Designers in Bangalore, Custom Home Interiors, Bangalore Interior Design, Modular Kitchen, Living Room Interiors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="My App" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Top Interior Designers in Bangalore | My App" />
        <meta property="og:description" content="Transform your space with Bangalore’s leading interior designers. From concept to completion, we bring your dream space to life." />
      
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body>
        <Navbar />
        <ImageSlider />
        <IntroSection />
        <Services />
        <WhyWork />
        <ImageComparison/>
        <WhoWeDesignFor/>
        <main>{children}</main>
      </body>
    </html>
  );
}
