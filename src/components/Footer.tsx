import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#20202D] text-white py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
                                                           <Image 
                  src="/images/logo.png" 
                  alt="amTop Logo" 
                  width={180} 
                  height={180} 
                  className="h-24 w-auto" 
                />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Comprehensive online management leadership training
            </p>
            <button className="w-fit px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-[#20202D] transition-all duration-200">
              Book a Call Now
            </button>
          </div>

          {/* Center Section - Connect With Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                         <div className="flex gap-4">
               {/* Facebook Icon */}
               <div className="w-12 h-12 bg-[#E5D4C3] rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                 <svg className="w-6 h-6 text-[#20202D]" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </div>
               
               {/* Instagram Icon */}
               <div className="w-12 h-12 bg-[#E5D4C3] rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                 <svg className="w-6 h-6 text-[#20202D]" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </div>
               
               {/* LinkedIn Icon */}
               <div className="w-12 h-12 bg-[#E5D4C3] rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                 <svg className="w-6 h-6 text-[#20202D]" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               </div>
             </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">About</div>
              <div className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Services</div>
              <div className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Posts</div>
              <div className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Blog</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm">
            Copywrite 2025
          </p>
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer; 