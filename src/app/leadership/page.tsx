import Image from 'next/image';

export default function LeadershipPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900">
            Complete Leadership Transformation Program
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto text-gray-600">
            Everything you need to develop exceptional leadership skills and achieve guaranteed business results.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 - Proven Sales Methodology */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Sales Methodology</h3>
              <p className="text-gray-600 leading-relaxed">
                Master the exact systems and strategies our experts use to consistently generate $100K+ in sales revenue.
              </p>
            </div>

            {/* Card 2 - Leadership Excellence */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Leadership Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop the core leadership competencies that drive team performance and business growth.
              </p>
            </div>

            {/* Card 3 - Implementation Acceleration */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Implementation Acceleration</h3>
              <p className="text-gray-600 leading-relaxed">
                Get immediate results with our step-by-step implementation guides and accountability systems.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <button className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 