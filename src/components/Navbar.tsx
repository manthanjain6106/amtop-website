'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#1B1C2B] text-white shadow flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 z-40 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="amTop Logo" 
          width={70} 
          height={70} 
          className="h-12 w-auto md:h-15" 
        />
      </div>
      
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        <Link href="/about" className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">About</Link>
        <Link href="/blog" className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">Blog</Link>
        <Link href="/post" className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">Post</Link>
        <Link href="/services" className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">Service</Link>
      </div>
      
      {/* Desktop CTA Button */}
      <div className="hidden md:flex items-center">
        <button className="bg-yellow-400 text-[#1B1C2B] font-semibold px-3 py-2 lg:px-4 lg:py-2 rounded shadow hover:bg-yellow-300 transition-colors duration-200 text-xs lg:text-sm">
          Claim Your Spot Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1B1C2B] shadow-lg md:hidden z-50">
          <div className="flex flex-col px-4 py-6 space-y-4">
            <Link 
              href="/about" 
              className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/post" 
              className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Post
            </Link>
            <Link 
              href="/services" 
              className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>
            <div className="pt-4">
              <button className="w-full bg-yellow-400 text-[#1B1C2B] font-semibold py-3 px-4 rounded shadow hover:bg-yellow-300 transition-colors duration-200 text-sm">
                Claim Your Spot Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 