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
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight whitespace-nowrap">
          Online management leadership program
        </h1>
        
        <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6">
          Achieve{' '}
          <span className="text-yellow-400 font-bold">$100,000</span>
          {' '}in Sales in{' '}
          <span className="text-yellow-400 font-bold">6 Months</span>
          {' '}or Get Your Money Back
        </div>
        
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Transform your leadership skills and drive significant revenue growth with our proven online program.
        </p>
        
        <button className="bg-black border-2 border-yellow-400 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-gray-900 hover:border-yellow-300">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Hero; 