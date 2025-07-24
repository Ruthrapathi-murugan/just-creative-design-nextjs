'use client';



import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [openPrice, setOpenPrice] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md" style={{padding:"0px 0px 0px 0px",margin:"0px 0px 0px 0px"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto"  style={{height:"48px",width:"90px"}}/>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium" style={{color:"black", fontFamily:"Helvetica Neue",fontSize:"18px"}}>
          <li><a href="#" className="hover:text-gray-600">Project</a></li>

        {/* Dropdown: Price Calculator */}
<li className="relative">
  <button
    onClick={() => {
      setOpenPrice(!openPrice);
      setOpenService(false); // Close Service dropdown
    }}
    className="flex items-center gap-1 hover:text-gray-600"
  >
    Price Calculator <ChevronDown size={16} />
  </button>
  {openPrice && (
    <ul className="absolute bg-white shadow-md p-2 mt-2 rounded z-10">
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Calculator</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kitchen Calculator</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Wardrope Calculator</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids Calculator</a></li>
    </ul>
  )}
</li>

{/* Dropdown: Service */}
<li className="relative">
  <button
    onClick={() => {
      setOpenService(!openService);
      setOpenPrice(false); // Close Price dropdown
    }}
    className="flex items-center gap-1 hover:text-gray-600"
  >
    Service <ChevronDown size={16} />
  </button>
  {openService && (
    <ul className="absolute bg-white shadow-md p-2 mt-2 rounded z-10">
     <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Interior Design</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Consultation</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg   -gray-100">Renovation</a></li>
    </ul>
  )}
</li>
<li><a href="#" className="hover:text-gray-600">Material</a></li>
 <li><a href="#" className="hover:text-gray-600">About</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact us</a></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden" style={{color:"black"}}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium bg-white shadow-md" style={{color:"black"}}>
          <li><a href="#" className="block hover:text-gray-600">Home</a></li>
          <li><a href="#" className="block hover:text-gray-600">Project</a></li>

       {/* Price Dropdown */}
<li>
  <button
    onClick={() => {
      setOpenPrice(!openPrice);
      setOpenService(false); // Close Service
    }}
    className="flex items-center justify-between w-full hover:text-gray-600"
  >
    Price Calculator <ChevronDown size={16} />
  </button>
  {openPrice && (
    <ul className="pl-4">
     <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Calculator</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg -gray-100">Kitchen Calculator</a></li>    
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Wardrope Calculator</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids Calculator</a></li> 
    </ul>
  )}
</li>

{/* Service Dropdown */}
<li>
  <button
    onClick={() => {
      setOpenService(!openService);
      setOpenPrice(false); // Close Price
    }}
    className="flex items-center justify-between w-full hover:text-gray-600"
  >
    Service <ChevronDown size={16} />
  </button>
  {openService && (
    <ul className="pl-4">
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Interior Design</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Consultation</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Renovation</a></li>
    </ul>
  )}
</li>


          <li><a href="#" className="block hover:text-gray-600">Contact us</a></li>
        </ul>
      )}
    </nav>
  );
}
