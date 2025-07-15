import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#20202D] text-white py-12 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Connect With Us</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-lg font-medium">
              <div>
                <div>About</div>
                <div>Contact</div>
                <div>Testimonial</div>
              </div>
              <div>
                <div>Blog</div>
                <div>Services Team</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col md:items-end gap-6 mt-8 md:mt-0">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <button className="w-56 h-14 border-2 border-[#B6C2E2] rounded-lg bg-[#F5F2F2] text-black text-2xl font-bold tracking-widest shadow-md mb-2">YouTube</button>
              <span className="text-base">10K member</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-56 h-14 border-2 border-[#B6C2E2] rounded-lg bg-[#F5F2F2] text-black text-2xl font-bold tracking-widest shadow-md mb-2">Linkdin</button>
              <span className="text-base">10K member</span>
            </div>
          </div>
        </div>
      </div>
      {/* Watermark Logo and amTop */}
      <div className="absolute bottom-0 right-0 z-0 flex items-end h-full w-full pointer-events-none select-none">
        <div className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px] opacity-10 mb-[-40px]">
          <Image src="/images/watermark-logo.png" alt="Watermark Logo" fill style={{objectFit: 'contain'}} />
        </div>
        <span className="absolute right-8 bottom-8 text-[120px] md:text-[180px] font-bold text-white opacity-10 leading-none">amTop</span>
      </div>
    </footer>
  );
};

export default Footer; 