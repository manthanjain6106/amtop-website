import Image from 'next/image';

const About = () => {
  const teamMembers = [
    {
      name: 'Amarnath Pandey',
      image: '/images/Amarnath Pandey.png',
      role: 'CEO & Founder',
      description: 'Visionary leader with extensive experience in digital transformation and business strategy.'
    },
    {
      name: 'Anant Dubey',
      image: '/images/anant dubey.png',
      role: 'CTO & Co-Founder',
      description: 'Technology expert specializing in innovative solutions and cutting-edge development.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-blue-600">amTop</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We are a team of passionate professionals dedicated to delivering exceptional 
            digital solutions that drive business growth and innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/about us page.png"
              alt="About amTop"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              At amTop, we believe in the power of technology to transform businesses. 
              Our mission is to provide innovative, scalable solutions that help our 
              clients achieve their digital transformation goals.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700">Innovative Technology Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700">Expert Team Support</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700">24/7 Customer Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Our Team
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Our leadership team brings together decades of experience in technology, 
            business strategy, and digital innovation.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 sm:mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {member.role}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 