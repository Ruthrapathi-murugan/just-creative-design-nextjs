// app/layout.js
import './globals.css'
import Navbar from '../components/Navbar'
import ImageSlider from '@/components/ImageSlider';
import IntroSection from '@/components/IntroSection';
import ServiceOffer from '@/components/ServiceOffer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ImageSlider/>
        <IntroSection />
        <ServiceOffer/>
        <main>{children}</main>
      </body>
    </html>
  );
}
