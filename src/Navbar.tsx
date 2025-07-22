// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Optional icon

export default function Navbar() {
  const [openPrice, setOpenPrice] = useState(false);
  const [openService, setOpenService] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="text-sm font-semibold leading-tight">
            <div>Just</div>
            <div>Creative</div>
            <div>Designs.</div>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Project</a></li>

          {/* Dropdown: Price Calculator */}
          <li className="relative">
            <button
              onClick={() => setOpenPrice(!openPrice)}
              className="flex items-center gap-1 hover:text-gray-600"
            >
              Price Calculator <ChevronDown size={16} />
            </button>
            {openPrice && (
              <ul className="absolute bg-white shadow-md p-2 mt-2 rounded">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Estimate</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Quote</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown: Service */}
          <li className="relative">
            <button
              onClick={() => setOpenService(!openService)}
              className="flex items-center gap-1 hover:text-gray-600"
            >
              Service <ChevronDown size={16} />
            </button>
            {openService && (
              <ul className="absolute bg-white shadow-md p-2 mt-2 rounded">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Interior</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Exterior</a></li>
              </ul>
            )}
          </li>

          <li><a href="#" className="hover:text-gray-600">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
}
