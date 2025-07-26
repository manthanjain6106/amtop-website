import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#20202D] text-white py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Connect With Us</h2>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2 text-base sm:text-lg font-medium">
              <div className="space-y-1 sm:space-y-2">
                <div className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">About</div>
                <div className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Contact</div>
                <div className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Testimonial</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Blog</div>
                <div className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Services Team</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col lg:items-end gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <button className="w-full sm:w-48 md:w-56 h-12 sm:h-14 border-2 border-[#B6C2E2] rounded-lg bg-[#F5F2F2] text-black text-lg sm:text-xl md:text-2xl font-bold tracking-widest shadow-md hover:bg-gray-200 transition-colors duration-200">
                YouTube
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-full sm:w-48 md:w-56 h-12 sm:h-14 border-2 border-[#B6C2E2] rounded-lg bg-[#F5F2F2] text-black text-lg sm:text-xl md:text-2xl font-bold tracking-widest shadow-md hover:bg-gray-200 transition-colors duration-200">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Watermark Logo and amTop */}
      <div className="absolute bottom-0 right-0 z-0 flex items-end h-full w-full pointer-events-none select-none">
        <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] opacity-10 mb-[-20px] sm:mb-[-30px] md:mb-[-40px]">
          <Image src="/images/watermark-logo.png" alt="Watermark Logo" fill style={{objectFit: 'contain'}} />
        </div>
        <span className="absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-bold text-white opacity-10 leading-none">
          amTop
        </span>
      </div>
    </footer>
  );
};

export default Footer; 