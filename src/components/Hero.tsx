import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home page.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Online management leadership program
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Achieve <span className="text-yellow-400 font-bold">$100,000</span> in Sales in <span className="text-yellow-400 font-bold">6 Months</span> or Get Your Money Back
            </h2>
            
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-4xl transition-all duration-300 inline-block mt-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Enroll Now
            </button>
          </div>

          {/* Right Column - Content Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg h-64 lg:h-80 border-4 border-white rounded-lg bg-black bg-opacity-30 flex items-center justify-center">
              {/* Placeholder content - you can replace this with video or other content */}
              <div className="text-white text-center opacity-70">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-sm">Video Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 