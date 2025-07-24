'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t text-[8px] sm:text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 flex flex-wrap items-start justify-between gap-y-6">

        {/* Logo */}
        <div className="flex-shrink-0 w-[60px] sm:w-[90px] lg:w-[120px] mb-4">
          <Image src="/logo.png" alt="Just Creative Designs" width={120} height={50} />
        </div>

        {/* Shop By */}
        <div className="flex flex-col min-w-[50px]" style={{color: "black"} }>
          <h3 className="font-semibold text-black mb-2">Shop By</h3>
          <ul className="space-y-1">
            <li><Link href="#">Wardrobe</Link></li>
            <li><Link href="#">Kitchen</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Commercial</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col min-w-[50px]" style={{color: "black"} }>
          <h3 className="font-semibold text-black mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Our Service</Link></li>
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Portfolio</Link></li>
          </ul>
        </div>

        {/* Get Help */}
        <div className="flex flex-col min-w-[60px]">
          <h3 className="font-semibold text-black mb-2">Get Help</h3>
          <ul className="space-y-1" style={{color: "black"} }>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>
        {/* Contact us */}
       <div className="hidden lg:flex flex-col min-w-[100px]">
  <h3 className="font-semibold text-black mb-2">Contact us</h3>
  <ul className="space-y-1" style={{ color: "black" }}>
    <li><Link href="#">Info@justcreativedesigns.in</Link></li>
    <li><Link href="#">+91- 8884456466</Link></li>
    <li><Link href="#">Instagram</Link></li>
  </ul>
</div>


        {/* Social Icons */}
       <div className="flex flex-col min-w-[100px] block lg:hidden" style={{ color: "black" }}>
  <h3 className="font-semibold text-black mb-2">Follow US</h3>
  <div className="flex space-x-3">
    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border flex items-center justify-center text-sm sm:text-base text-gray-700 hover:text-black">
      <FaLinkedin />
    </Link>
    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border flex items-center justify-center text-sm sm:text-base text-gray-700 hover:text-black">
      <FaInstagram />
    </Link>
  </div>
</div>

      </div>

      <div className="border-t text-center py-4 sm:py-6 text-[9px] sm:text-xs md:text-sm text-gray-500">
        © Copyright 2025 JustCreateDesign — All Rights Reserved.
      </div>
    </footer>
  );
}
