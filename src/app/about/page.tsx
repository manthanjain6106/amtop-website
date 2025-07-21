import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-us-page.png"
          alt="About Us Background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-8 min-h-screen">
          <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white block mb-2">Transforming Leaders</span>
              <span className="text-yellow-400 block">Elevating Results</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center text-white mb-8 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              We are the catalyst for extraordinary business transformation. Our proven methodologies don't just improve performance—they revolutionize how leaders think, act, and achieve.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#5B5B7B]/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md md:max-w-xl w-full flex flex-col items-center shadow-lg backdrop-blur-md mx-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>Our Mission</h2>
            <div className="mb-3 sm:mb-4 flex items-center justify-center">
              <span className="bg-yellow-400 rounded-full p-3 sm:p-4 flex items-center justify-center">
                {/* Improved mountain with flag mission icon */}
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 48 48" fill="none">
                  <g>
                    {/* Mountain base */}
                    <path
                      d="M8 40c-1.1 0-2-.9-2-2 0-.37.1-.73.3-1.04l14-21c.37-.56 1.13-.71 1.67-.34.13.09.25.21.34.34l14 21c.6.91-.04 2.04-1.13 2.04H8z"
                      fill="currentColor"
                    />
                    {/* Mountain detail (snow cap) */}
                    <path
                      d="M18 32l6-4 6 4"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    {/* Flag pole */}
                    <rect x="23" y="10" width="2" height="10" rx="1" fill="#fff"/>
                    {/* Flag */}
                    <path
                      d="M25 10l6 2-6 2V10z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <p className="text-white text-sm sm:text-base text-center leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              To empower business leaders with the tools, strategies, and mindset needed to achieve extraordinary results while building sustainable, people-centered organizations.
            </p>
          </div>
        </div>
      </div>
      {/* Our Story Section */}
      <section className="w-full bg-[#F7F7FA] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C2B] mb-6 sm:mb-8" style={{ fontFamily: 'Secular One, sans-serif' }}>Our Story</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur. At nec commodo adipiscing sit quis ac. Interdum id odio cursus sed nullam. Eget semper lacus enim at. Lorem aliquet in donec viverra cras ipsum. Sapien nunc viverra et eu nibh sem habitant vitae ornare. Congue a dui sapien arcu ultrices risus. Magna dolor at proin diam morbi.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur. At nec commodo adipiscing sit quis ac. Interdum id odio cursus sed nullam. Eget semper lacus enim at. Lorem aliquet in donec viverra cras ipsum. Sapien nunc viverra et eu nibh sem habitant vitae ornare. Congue a dui sapien arcu ultrices risus. Magna dolor at proin diam morbi.
          </p>
        </div>
      </section>
      {/* Our Core Values Section */}
      <section className="w-full bg-[#F7F7FA] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C2B] mb-2" style={{ fontFamily: 'Secular One, sans-serif' }}>Our Core Values</h2>
          <p className="text-base sm:text-lg text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>The principles that guide everything we do</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Results-Driven */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition hover:shadow-lg">
            <span className="bg-[#E5D8B0] rounded-full p-4 sm:p-5 mb-4 sm:mb-6 flex items-center justify-center">
              {/* Filled Target with Arrow Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white"/>
                <circle cx="12" cy="12" r="6" fill="#E5D8B0"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
                <path d="M17 7l-6 6" stroke="#E5D8B0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 7h-4v4" stroke="#E5D8B0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C2B] mb-2 sm:mb-3" style={{ fontFamily: 'Lora, serif' }}>Results-Driven</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>We don&apos;t just teach theory - we deliver measurable outcomes that transform your business</p>
          </div>
          {/* People-First */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition hover:shadow-lg">
            <span className="bg-[#E5D8B0] rounded-full p-4 sm:p-5 mb-4 sm:mb-6 flex items-center justify-center">
              {/* Filled Bar Chart with Arrow Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white"/>
                <rect x="7" y="13" width="2" height="4" rx="1" fill="#E5D8B0"/>
                <rect x="11" y="10" width="2" height="7" rx="1" fill="#E5D8B0"/>
                <rect x="15" y="7" width="2" height="10" rx="1" fill="#E5D8B0"/>
                <path d="M15 7l2-2m0 0l2 2m-2-2v6" stroke="#E5D8B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C2B] mb-2 sm:mb-3" style={{ fontFamily: 'Lora, serif' }}>People-First</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>Every transformation starts with people. We believe in unleashing human potential</p>
          </div>
          {/* Integrity */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition hover:shadow-lg">
            <span className="bg-[#E5D8B0] rounded-full p-4 sm:p-5 mb-4 sm:mb-6 flex items-center justify-center">
              {/* Filled Checkmark in Circle Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white"/>
                <circle cx="12" cy="12" r="6" fill="#E5D8B0"/>
                <path d="M9.5 12.5l2 2 3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C2B] mb-2 sm:mb-3" style={{ fontFamily: 'Lora, serif' }}>Integrity</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>Honest, transparent partnerships built on trust and mutual respect</p>
          </div>
        </div>
      </section>
      {/* Meet Our Team Section */}
      <section className="w-full bg-[#F7F7FA] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C2B] mb-2" style={{ fontFamily: 'Secular One, sans-serif' }}>Meet Our Team</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Amarnath Pandey - CEO */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-xl sm:rounded-2xl shadow-md mb-3 sm:mb-4 overflow-hidden">
              <Image
                src="/images/Amarnath Pandey.png"
                alt="Amarnath Pandey"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1B1C2B] mb-1 text-center" style={{ fontFamily: 'Lora, serif' }}>Amarnath Pandey</h3>
            <p className="text-base sm:text-lg text-gray-500" style={{ fontFamily: 'Lora, serif' }}>CEO</p>
          </div>
          {/* Anant Dubey - COO */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-xl sm:rounded-2xl shadow-md mb-3 sm:mb-4 overflow-hidden">
              <Image
                src="/images/anant dubey.png"
                alt="Anant Dubey"
                width={256}
                height={320}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%', transform: 'scale(1.1)' }}
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1B1C2B] mb-1 text-center" style={{ fontFamily: 'Lora, serif' }}>Anant Dubey</h3>
            <p className="text-base sm:text-lg text-gray-500" style={{ fontFamily: 'Lora, serif' }}>COO</p>
          </div>
          {/* Third Team Member */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-xl sm:rounded-2xl shadow-md mb-3 sm:mb-4 overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-4xl sm:text-6xl">👤</div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1B1C2B] mb-1 text-center" style={{ fontFamily: 'Lora, serif' }}>Team Member 3</h3>
            <p className="text-base sm:text-lg text-gray-500" style={{ fontFamily: 'Lora, serif' }}>CTO</p>
          </div>
          {/* Fourth Team Member */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-xl sm:rounded-2xl shadow-md mb-3 sm:mb-4 overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-4xl sm:text-6xl">👤</div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1B1C2B] mb-1 text-center" style={{ fontFamily: 'Lora, serif' }}>Team Member 4</h3>
            <p className="text-base sm:text-lg text-gray-500" style={{ fontFamily: 'Lora, serif' }}>CFO</p>
          </div>
        </div>
      </section>
      {/* Our Unique Approach Section */}
      <section className="w-full py-20 px-4" style={{
        background: 'linear-gradient(90deg, #E3E5ED 0%, #F3E9D6 100%)'
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-[#18192B] text-center mb-16 tracking-tight" style={{ fontFamily: 'Secular One, sans-serif' }}>Our Unique Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Key Features */}
            <div className="space-y-14">
              {/* Proven Methodologies */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {/* Prize/Award Icon - provided SVG, color adjusted */}
                  <svg height="48" width="48" viewBox="0 0 23.382 23.382" fill="#F7C948" stroke="#F7C948" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M14.58,15.181c0.438-0.732,1.082-1.107,1.936-1.117c0.854-0.01,1.285-0.445,1.299-1.301 c0.012-0.852,0.383-1.496,1.115-1.932c0.734-0.438,0.893-1.027,0.475-1.773c-0.416-0.744-0.416-1.488,0-2.234 c0.418-0.744,0.26-1.332-0.475-1.77c-0.732-0.439-1.104-1.082-1.115-1.938c-0.014-0.852-0.445-1.287-1.299-1.297 c-0.854-0.012-1.498-0.385-1.936-1.117c-0.438-0.734-1.027-0.893-1.771-0.475c-0.744,0.416-1.49,0.416-2.234,0 C9.83-0.19,9.241-0.032,8.803,0.702C8.366,1.435,7.721,1.808,6.868,1.819c-0.852,0.01-1.285,0.445-1.297,1.297 C5.557,3.972,5.186,4.614,4.454,5.054C3.72,5.492,3.559,6.079,3.979,6.824c0.418,0.746,0.418,1.49,0,2.234 c-0.42,0.746-0.26,1.336,0.475,1.773c0.732,0.436,1.104,1.08,1.117,1.932c0.012,0.855,0.445,1.291,1.297,1.301 c0.854,0.01,1.498,0.385,1.936,1.117c0.438,0.734,1.027,0.893,1.771,0.473c0.744-0.412,1.49-0.412,2.234,0 C13.553,16.073,14.143,15.915,14.58,15.181z M11.694,12.614c-2.582,0-4.674-2.092-4.674-4.674c0-2.58,2.092-4.672,4.674-4.672 c2.58,0,4.672,2.092,4.672,4.672C16.366,10.522,14.274,12.614,11.694,12.614z"/>
                      <path d="M6.793,14.749c-0.898,0-1.018-0.418-1.018-0.418l-3.507,6.893l2.812-0.316l1.555,2.34c0,0,3.24-6.76,3.24-6.715 C8.196,16.491,8.864,14.794,6.793,14.749z"/>
                      <path d="M17.563,14.601c-2.562,0.268-2.041,0.904-2.627,1.398c-0.674,0.719-1.516,0.578-1.516,0.578l3.955,6.805l0.973-2.52 l2.766,0.361L17.563,14.601z"/>
                      <polygon points="12.67,6.909 11.692,4.929 10.713,6.909 8.524,7.229 10.106,8.772 9.733,10.954 11.692,9.925 13.651,10.954 13.278,8.772 14.86,7.229 "/>
                    </g>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-[#18192B] mb-2" style={{ fontFamily: 'Lora, serif' }}>Proven Methodologies</h3>
                  <p className="text-lg text-gray-500 font-medium" style={{ fontFamily: 'Lora, serif' }}>Time-tested frameworks combined with cutting-edge research in leadership psychology</p>
                </div>
              </div>
              {/* Measurable Results */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {/* Bar Chart with Arrow Icon - provided SVG, color adjusted */}
                  <svg viewBox="0 0 14 14" width="48" height="48" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="#F7C948" d="M5.33333335 6.00000006h3.3333333v6.6666666h-3.3333333zm4.33333329-4.66666662h3.3333333v11.33333322h-3.3333333zM1.00000006 8.6666667h3.3333333v3.99999996h-3.3333333z"></path>
                    <g fill="#F7C948">
                      <path d="M2.66666671 1.33333344l3.3333333 3.3333333v-3.3333333z"></path>
                      <path d="M2.13143329 6.14556682l-.94266666-.94266666L4.5116666 1.8800002l.94266665.94266665z"></path>
                    </g>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-[#18192B] mb-2" style={{ fontFamily: 'Lora, serif' }}>Measurable Results</h3>
                  <p className="text-lg text-gray-500 font-medium" style={{ fontFamily: 'Lora, serif' }}>Every engagement includes clear metrics and accountability systems for sustained success</p>
                </div>
              </div>
              {/* Personalized Solutions */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {/* Two People Icon - provided SVG, color adjusted */}
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                    <path d="M3 18.433C3 16.4308 4.45485 14.7254 6.43204 14.4098L6.61013 14.3814C8.19336 14.1287 9.80664 14.1287 11.3899 14.3814L11.568 14.4098C13.5451 14.7254 15 16.4308 15 18.433C15 19.2984 14.2984 20 13.433 20H4.56697C3.70156 20 3 19.2984 3 18.433Z" stroke="#F7C948" stroke-width="1.5"></path>
                    <path d="M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z" stroke="#F7C948" stroke-width="1.5"></path>
                    <path d="M15 11C16.933 11 18.5 9.433 18.5 7.5C18.5 5.567 16.933 4 15 4M17.3899 20H19.433C20.2984 20 21 19.2984 21 18.433C21 16.4308 19.5451 14.7254 17.568 14.4098V14.4098C17.4494 14.3909 17.3293 14.3814 17.2093 14.3814C16.8895 14.3814 16.7902 14.3814 16.2412 14.3814" stroke="#F7C948" stroke-width="1.5" stroke-linecap="round"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-[#18192B] mb-2" style={{ fontFamily: 'Lora, serif' }}>Personalized Solutions</h3>
                  <p className="text-lg text-gray-500 font-medium" style={{ fontFamily: 'Lora, serif' }}>No cookie-cutter approaches—every solution is tailored to your unique challenges</p>
                </div>
              </div>
            </div>
            {/* Right Side - Call to Action */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                {/* Large Target Icon - provided SVG, color adjusted */}
                <svg fill="#F7C948" viewBox="0 0 24 24" width="256" height="256" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                  <path d="M21.92,5.62A1,1,0,0,0,21,5H19V3a1,1,0,0,0-.62-.92,1,1,0,0,0-1.09.21l-3,3A1,1,0,0,0,14,6V8.59l-2.21,2.2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L15.41,10H18a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,21.92,5.62Z" fill="#F7C948"/>
                  <path d="M12,22A10,10,0,0,1,12,2h.42a1,1,0,1,1-.18,2H12a8,8,0,1,0,8,8,1.93,1.93,0,0,0,0-.24,1,1,0,0,1,.91-1.09,1,1,0,0,1,1.09.91c0,.14,0,.28,0,.42A10,10,0,0,1,12,22Zm5.88-8.8a1,1,0,0,0-2-.4A4,4,0,1,1,11.2,8.08a1,1,0,1,0-.4-2,6,6,0,1,0,7.08,7.08Z" fill="#F7C948"/>
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-[#18192B] mb-8" style={{ fontFamily: 'Secular One, sans-serif' }}>Ready To Transform?</h3>
              <button className="bg-[#18192B] text-[#F7C948] px-12 py-5 rounded-lg font-bold border-2 border-[#F7C948] text-xl shadow-lg hover:bg-[#F7C948] hover:text-[#18192B] transition duration-300">
                Book A Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 