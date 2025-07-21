import Image from 'next/image';
import { ClipboardDocumentListIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image only for hero */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services-bg.png"
              alt="Services Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span>Transform Your Leadership &</span><br />
              <span className="text-yellow-400">Guarantee $100,000+ in Sales</span>                       
            </h1>
            
            {/* Descriptive Paragraph */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Our comprehensive 6-month management leadership program is designed for ambitious entrepreneurs and business leaders who are serious about achieving extraordinary results.
            </p>

            {/* Key Features List */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-12">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1B1C2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>$100K Guarantee</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1B1C2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>6-Month Program</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1B1C2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Expert Coaching</span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <button className="bg-[#1B1C2B] text-white font-bold px-8 py-4 rounded-lg text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-[#1B1C2B] transition-all duration-300 shadow-lg">
              Book A Call Now
            </button>
          </div>
        </div>

        {/* Leadership Transformation Section */}
        <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Source Serif Pro, serif', fontWeight: 700 }}>
              Complete Leadership Transformation Program
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
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
                <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Proven Sales Methodology</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
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
                <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Leadership Excellence</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
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
                <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Implementation Acceleration</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                  Get immediate results with our step-by-step implementation guides and accountability systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Here's What You'll Experience Section */}
        <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 text-center text-gray-900" style={{ fontFamily: 'Source Serif Pro, serif', fontWeight: 700 }}>
              Here&apos;s What You&apos;ll Experience
            </h2>

            {/* Vertical Zig-Zag Layout */}
            <div className="space-y-20">
              {/* Block 1 - Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src="/images/service-page-1.jpeg"
                    alt="Experience 1"
                    width={420}
                    height={280}
                    className="rounded-2xl object-cover w-full max-w-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>
                    Lorem ipsum nulla
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet consectetur. At nec commodo adipiscing sit quis ac. Interdum id odio cursus sed nullam. Eget semper lacus enim at. Lorem aliquet in donec viverra cras ipsum. Sapien nunc viverra et eu nibh sem habitant vitae ornare. Congue a dui sapien arcu ultrices risus. Magna dolor at proin diam morbi.
                  </p>
                </div>
              </div>

              {/* Block 2 - Text Left, Image Right */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>
                    Lorem ipsum nulla
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet consectetur. At nec commodo adipiscing sit quis ac. Interdum id odio cursus sed nullam. Eget semper lacus enim at. Lorem aliquet in donec viverra cras ipsum. Sapien nunc viverra et eu nibh sem habitant vitae ornare. Congue a dui sapien arcu ultrices risus. Magna dolor at proin diam morbi.
                  </p>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                  <Image
                    src="/images/Service-Page-2.jpeg"
                    alt="Experience 2"
                    width={420}
                    height={280}
                    className="rounded-2xl object-cover w-full max-w-md"
                  />
                </div>
              </div>

              {/* Block 3 - Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src="/images/Service-page-3.jpeg"
                    alt="Experience 3"
                    width={420}
                    height={280}
                    className="rounded-2xl object-cover w-full max-w-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>
                    Lorem ipsum nulla
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet consectetur. At nec commodo adipiscing sit quis ac. Interdum id odio cursus sed nullam. Eget semper lacus enim at. Lorem aliquet in donec viverra cras ipsum. Sapien nunc viverra et eu nibh sem habitant vitae ornare. Congue a dui sapien arcu ultrices risus. Magna dolor at proin diam morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Month Transformation Journey Section */}
        <div className="relative py-16 px-2 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-gray-100 to-[#e7dfd6]">
          <div className="max-w-6xl mx-auto">
            {/* Section Title and Subtitle */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'Source Serif Pro, serif', fontWeight: 700 }}>Your 6-Month Transformation Journey</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
                A systematic, proven approach that takes you from where you are now to guaranteed $100K+ results.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="flex flex-col gap-8">
              {/* Card 1 - Months 1-2 */}
              <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl px-8 py-6 md:py-8 md:px-10 items-center md:items-stretch gap-6 md:gap-0 border border-gray-100 mb-2 md:mb-4" style={{boxShadow:'0 6px 24px 0 rgba(0,0,0,0.10)'}}>
                {/* Left */}
                <div className="flex-1 flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    {/* Clipboard/List Icon */}
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fef3c7" />
                      <rect x="8" y="7" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="11" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="15" width="5" height="2" rx="1" fill="#facc15" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-yellow-500 font-bold text-base mb-1 uppercase tracking-wide" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>MONTH 1-2</div>
                    <div className="font-extrabold text-xl md:text-2xl text-black leading-tight mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Foundation & Assessment</div>
                    <div className="text-gray-500 text-sm md:text-base max-w-xs" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus turpis donec faucibus sed facilisi.</div>
                  </div>
                </div>
                {/* Right */}
                <div className="flex-1 flex flex-col justify-center md:pl-8">
                  <div className="font-bold text-lg text-black mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 600 }}>Key Deliverables :</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                  </ul>
                </div>
              </div>
              {/* Card 2 - Months 3-4 */}
              <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl px-8 py-6 md:py-8 md:px-10 items-center md:items-stretch gap-6 md:gap-0 border border-gray-100 mb-2 md:mb-4" style={{boxShadow:'0 6px 24px 0 rgba(0,0,0,0.10)'}}>
                {/* Left */}
                <div className="flex-1 flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    {/* Clipboard/List Icon */}
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fef3c7" />
                      <rect x="8" y="7" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="11" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="15" width="5" height="2" rx="1" fill="#facc15" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-yellow-500 font-bold text-base mb-1 uppercase tracking-wide" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>MONTH 3-4</div>
                    <div className="font-extrabold text-xl md:text-2xl text-black leading-tight mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Implementation & Growth</div>
                    <div className="text-gray-500 text-sm md:text-base max-w-xs" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus turpis donec faucibus sed facilisi.</div>
                  </div>
                </div>
                {/* Right */}
                <div className="flex-1 flex flex-col justify-center md:pl-8">
                  <div className="font-bold text-lg text-black mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 600 }}>Key Deliverables :</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                  </ul>
                </div>
              </div>
              {/* Card 3 - Months 5-6 */}
              <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl px-8 py-6 md:py-8 md:px-10 items-center md:items-stretch gap-6 md:gap-0 border border-gray-100 mb-2 md:mb-4" style={{boxShadow:'0 6px 24px 0 rgba(0,0,0,0.10)'}}>
                {/* Left */}
                <div className="flex-1 flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    {/* Clipboard/List Icon */}
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fef3c7" />
                      <rect x="8" y="7" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="11" width="8" height="2" rx="1" fill="#facc15" />
                      <rect x="8" y="15" width="5" height="2" rx="1" fill="#facc15" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-yellow-500 font-bold text-base mb-1 uppercase tracking-wide" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>MONTH 5-6</div>
                    <div className="font-extrabold text-xl md:text-2xl text-black leading-tight mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Acceleration & Results</div>
                    <div className="text-gray-500 text-sm md:text-base max-w-xs" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus turpis donec faucibus sed facilisi.</div>
                  </div>
                </div>
                {/* Right */}
                <div className="flex-1 flex flex-col justify-center md:pl-8">
                  <div className="font-bold text-lg text-black mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 600 }}>Key Deliverables :</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                    <li className="flex items-start gap-2"><svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#d1fae5" /><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Gravida bibendum tempor odio tellus</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 