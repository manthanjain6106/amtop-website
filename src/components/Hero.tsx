import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-600">
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
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Online management leadership program
        </h1>
        
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-white mb-4 sm:mb-6 lg:mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="block sm:inline">
            Achieve{' '}
            <span className="text-yellow-400 font-bold">$100,000</span>
            {' '}in Sales in{' '}
            <span className="text-yellow-400 font-bold">6 Months</span>
          </span>
          {' '}or Get Your Money Back
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Transform your leadership skills and drive significant revenue growth with our proven online program.
        </p>
        
        <button className="bg-black border-2 border-yellow-400 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-gray-900 hover:border-yellow-300 w-full sm:w-auto">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Hero; 