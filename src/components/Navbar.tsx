'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1B1C2B] text-white shadow flex items-center justify-between px-4 md:px-12 h-16 z-40 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="amTop Logo" width={70} height={70} className="h-15 w-auto" />
      </div>
      {/* Nav Links */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/about" className="text-white font-medium hover:text-yellow-400 transition">About</Link>
        <Link href="/blog" className="text-white font-medium hover:text-yellow-400 transition">Blog</Link>
        <Link href="/post" className="text-white font-medium hover:text-yellow-400 transition">Post</Link>
        <Link href="/services" className="text-white font-medium hover:text-yellow-400 transition">Service</Link>
      </div>
      {/* CTA Button */}
      <div className="flex items-center gap-2">
        <button className="bg-yellow-400 text-[#1B1C2B] font-semibold px-4 py-2 rounded shadow hover:bg-yellow-300 transition text-xs md:text-sm">Claim Your Spot Now</button>
      </div>
    </nav>
  );
};

export default Navbar; 