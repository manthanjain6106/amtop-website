import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-page.png"
            alt="Blog Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 pt-32 pb-12">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-white">Leadership Insights &amp;</span><br />
            <span className="text-yellow-400">Success Strategies</span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-center text-white mb-10 max-w-2xl" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            Expert insights, proven strategies, and real success stories from leaders who&apos;ve achieved $100K+ results.
          </p>
          {/* Search Bar */}
          <div className="w-full max-w-xl mb-8">
            <div className="flex items-center bg-white/90 rounded px-4 py-2 border-2 border-blue-900 focus-within:ring-2 focus-within:ring-blue-900">
              <svg className="w-7 h-7 text-blue-900 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-lg text-blue-900 placeholder:text-blue-900/70"
              />
            </div>
          </div>
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Leadership</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Team Management</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Growth</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Sale Strategy</button>
          </div>
        </div>
      </div>
      
      {/* Featured Article Section */}
      <section className="w-full bg-[#F7F7FA] py-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[#1B1C2B]" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 700 }}>Featured Article</h2>
        <p className="text-lg text-gray-500 text-center mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Latest insights from our leadership experts</p>
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden p-6 sm:p-8 gap-8 items-center">
          {/* Article Image */}
          <div className="w-full sm:w-2/5 flex-shrink-0">
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/latest-blog.png"
                alt="Understanding Artificial Intelligence"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Article Content */}
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-[#1B1C2B] mb-2 tracking-tight" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 600 }}>
                <span className="border-b-2 border-gray-300 pb-1 inline-block">Understanding AI</span>
              </h3>
              <p className="text-gray-600 mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam. Auctor amet et vulputate adipiscing sollicitudin leo rhoncus.</p>
              <p className="text-gray-700 mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Discover the mechanisms behind AI......</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Technology</span>
                <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">AI</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gray-200 inline-block" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#1B1C2B]">Author Name</span>
                  <span className="text-xs text-gray-500">December 15, 2024</span>
                </div>
              </div>
              <button className="bg-[#F7F7FA] hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-5 py-2 rounded-lg shadow transition text-sm">Read Full Article →</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Articles Section */}
      <section className="w-full bg-[#F7F7FA] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1B1C2B]" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 700 }}>Latest Articles</h2>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Article Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Understanding AI</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Team Management</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 15, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Leadership Strategies</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Leadership</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 14, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Growth Tactics</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Growth</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 13, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Sales Strategy</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Sale Strategy</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 12, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Team Building</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Team Management</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 11, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#1B1C2B]">Digital Marketing</h3>
                  <span className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">Growth</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">December 10, 2024</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Volutpat felis pharetra imperdiet at lorem in consequat non etiam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                    <span className="text-sm text-gray-500">Author Name</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-white border-2 border-[#1B1C2B] text-[#1B1C2B] font-bold px-8 py-4 rounded-lg hover:bg-[#1B1C2B] hover:text-white transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
