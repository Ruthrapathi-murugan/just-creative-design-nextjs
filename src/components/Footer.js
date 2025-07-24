'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-600">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image src="/logo.png" alt="Just Creative Designs" width={120} height={50} />
        </div>

        {/* Shop By */}
        <div>
          <h3 className="font-semibold text-black mb-4">Shop By</h3>
          <ul className="space-y-2">
            <li><Link href="#">Wardrobe</Link></li>
            <li><Link href="#">Kitchen</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Commercial</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Our Service</Link></li>
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Portfolio</Link></li>
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="font-semibold text-black mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact us</Link></li>
          </ul>
        </div>

        {/* Contact Us & Social */}
        <div>
          <h3 className="font-semibold text-black mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: <Link href="mailto:info@justcreativedesigns.in">info@justcreativedesigns.in</Link></li>
            <li>Call: <Link href="tel:+918884456466">+91- 8884456466</Link></li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t text-center py-6 text-xs text-gray-500">
        © Copyright 2025 JustCreateDesign — All Rights Reserved.
      </div>
    </footer>
  );
}
