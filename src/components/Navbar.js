'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [openPrice, setOpenPrice] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 font-normal text-[18px] leading-[120%] tracking-[-0.02em]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-[67px] px-4 sm:px-4 md:px-4 lg:px-4">
        {/* Logo */}
        <Link href="/">
          <img src="/Logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-black text-[18px]">
          <li><Link href="/project" className="hover:text-gray-600">Project</Link></li>

          {/* Price Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setOpenPrice(!openPrice);
                setOpenService(false);
              }}
              className="flex items-center gap-1 hover:text-gray-600"
            >
              Price Calculator <ChevronDown size={16} />
            </button>
            {openPrice && (
              <ul className="absolute bg-white shadow-md p-2 mt-2 rounded z-10">
                <li><Link href="/price/home-calculator" className="block px-4 py-2 hover:bg-gray-100">Home Calculator</Link></li>
                <li><Link href="/price/kitchen-calculator" className="block px-4 py-2 hover:bg-gray-100">Kitchen Calculator</Link></li>
                <li><Link href="/price/wardrobe-calculator" className="block px-4 py-2 hover:bg-gray-100">Wardrobe Calculator</Link></li>
                <li><Link href="/price/kids-calculator" className="block px-4 py-2 hover:bg-gray-100">Kids Calculator</Link></li>
              </ul>
            )}
          </li>

          {/* Service Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setOpenService(!openService);
                setOpenPrice(false);
              }}
              className="flex items-center gap-1 hover:text-gray-600"
            >
              Service <ChevronDown size={16} />
            </button>
            {openService && (
              <ul className="absolute bg-white shadow-md p-2 mt-2 rounded z-10">
                <li><Link href="/services/kitchen" className="block px-4 py-2 hover:bg-gray-100">Kitchen</Link></li>
                <li><Link href="/services/wardrobe" className="block px-4 py-2 hover:bg-gray-100">Wardrobe</Link></li>
                <li><Link href="/services/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/material" className="hover:text-gray-600">Material</Link></li>
          <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-600">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium text-black bg-white shadow-md">
          <li><Link href="/" className="block hover:text-gray-600">Home</Link></li>
          <li><Link href="/project" className="block hover:text-gray-600">Project</Link></li>

          {/* Mobile Price Dropdown */}
          <li>
            <button
              onClick={() => {
                setOpenPrice(!openPrice);
                setOpenService(false);
              }}
              className="flex items-center justify-between w-full hover:text-gray-600"
            >
              Price Calculator <ChevronDown size={16} />
            </button>
            {openPrice && (
              <ul className="pl-4">
                <li><Link href="/price/home-calculator" className="block px-4 py-2 hover:bg-gray-100">Home Calculator</Link></li>
                <li><Link href="/price/kitchen-calculator" className="block px-4 py-2 hover:bg-gray-100">Kitchen Calculator</Link></li>
                <li><Link href="/price/wardrobe-calculator" className="block px-4 py-2 hover:bg-gray-100">Wardrobe Calculator</Link></li>
                <li><Link href="/price/kids-calculator" className="block px-4 py-2 hover:bg-gray-100">Kids Calculator</Link></li>
              </ul>
            )}
          </li>

          {/* Mobile Service Dropdown */}
          <li>
            <button
              onClick={() => {
                setOpenService(!openService);
                setOpenPrice(false);
              }}
              className="flex items-center justify-between w-full hover:text-gray-600"
            >
              Service <ChevronDown size={16} />
            </button>
            {openService && (
              <ul className="pl-4">
                <li><Link href="/services/kitchen" className="block px-4 py-2 hover:bg-gray-100">Kitchen</Link></li>
                <li><Link href="/services/wardrobe" className="block px-4 py-2 hover:bg-gray-100">Wardrobe</Link></li>
                <li><Link href="/services/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/material" className="block hover:text-gray-600">Material</Link></li>
          <li><Link href="/about" className="block hover:text-gray-600">About</Link></li>
          <li><Link href="/contact" className="block hover:text-gray-600">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}
