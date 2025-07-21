"use client";

const WhatYouReceive = () => {
  const features = [
    {
      icon: "💰",
      title: "Guaranteed Results",
      description: "Reach 100,000$ in sales or get 100% money back guarantee"
    },
    {
      icon: "📈",
      title: "6 Month Timeline",
      description: "Structured timeline with weekly milestones to ensure rapid progress"
    },
    {
      icon: "✅",
      title: "Proven Track Record",
      description: "Join hundreds of successful business leaders"
    },
    {
      icon: "👥",
      title: "Leadership Program",
      description: "Comprehensive online management leadership training"
    },
    {
      icon: "🎥",
      title: "Video Editing Training",
      description: "Master content creation to amplify your personal brand and leadership presence"
    },
    {
      icon: "🎯",
      title: "Exclusive 1-on-1 Coaching",
      description: "Reach 100,000$ in sales or get 100% money back guarantee"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Lora, serif' }}>
            What You'll Receive in This{" "}
            <span className="text-yellow-500">Exclusive Program</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
            A comprehensive leadership transformation system designed to guarantee your success - or you get every penny back
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-[300px] h-[320px] flex flex-col items-center justify-start pt-8 pb-6 px-4" style={{ boxShadow: '0 4px 24px 0 rgba(35,44,125,0.10), 0 0 24px 0 rgba(35,44,125,0.10)' }}
            >
              <div className="flex flex-col items-center mb-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-b from-[#363A54] to-[#232C7D]">
                  {/* SVG ICONS */}
                  {index === 0 && (
                    // Target (custom SVG from user, white fill)
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.92,5.62A1,1,0,0,0,21,5H19V3a1,1,0,0,0-.62-.92,1,1,0,0,0-1.09.21l-3,3A1,1,0,0,0,14,6V8.59l-2.21,2.2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L15.41,10H18a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,21.92,5.62Z" fill="#fff"/>
                      <path d="M12,22A10,10,0,0,1,12,2h.42a1,1,0,1,1-.18,2H12a8,8,0,1,0,8,8,1.93,1.93,0,0,0,0-.24,1,1,0,0,1,.91-1.09,1,1,0,0,1,1.09.91c0,.14,0,.28,0,.42A10,10,0,0,1,12,22Zm5.88-8.8a1,1,0,0,0-2-.4A4,4,0,1,1,11.2,8.08a1,1,0,1,0-.4-2,6,6,0,1,0,7.08,7.08Z" fill="#fff"/>
                    </svg>
                  )}
                  {index === 1 && (
                    // Bar chart with arrow (custom SVG from user, white fill)
                    <svg width="36" height="36" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#fff" d="M5.33333335 6.00000006h3.3333333v6.6666666h-3.3333333zm4.33333329-4.66666662h3.3333333v11.33333322h-3.3333333zM1.00000006 8.6666667h3.3333333v3.99999996h-3.3333333z"></path>
                      <g fill="#fff">
                        <path d="M2.66666671 1.33333344l3.3333333 3.3333333v-3.3333333z"></path>
                        <path d="M2.13143329 6.14556682l-.94266666-.94266666L4.5116666 1.8800002l.94266665.94266665z"></path>
                      </g>
                    </svg>
                  )}
                  {index === 2 && (
                    // Check in circle
                    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" fill="white"/>
                      <path d="M16 24L22 30L32 18" stroke="#232C7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {index === 3 && (
                    // Leadership Program - Professional group icon
                    <svg width="56" height="56" viewBox="0 0 100.4 100.4" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M76.9,34v-2.7c3.4-2,5.6-5.7,5.6-9.7v-4.8c0-6.2-5-11.2-11.2-11.2S60,10.6,60,16.8v4.8c0,3.9,2,7.5,5.4,9.5v2.9 c-1.5,0.4-2.9,1-4.3,1.8c-2.2-5.1-7.3-8.7-13.2-8.7c-5.8,0-10.7,3.4-13,8.4c-1.3-0.6-2.6-1.2-3.9-1.5v-2.7c3.4-2,5.6-5.7,5.6-9.7 v-4.8c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2v4.8c0,3.9,2,7.5,5.4,9.5v2.9c-9,2.6-15.1,10.7-15.1,20.1c0,0.8,0.7,1.5,1.5,1.5 h29.6c0.1,0,0.2,0,0.3,0c1.2,1.9,2.9,3.5,4.9,4.7v4.5c-11.9,3.2-20,13.9-20,26.3c0,0.8,0.7,1.5,1.5,1.5h51.5c0.8,0,1.5-0.7,1.5-1.5 c0-12.3-8.5-23.2-20.3-26.3v-4.3c2.1-1.2,3.8-2.8,5.1-4.8h30.7c0.8,0,1.5-0.7,1.5-1.5C92.2,44.8,85.8,36.5,76.9,34z M7.5,52.7 c0.6-7.8,6.2-14.2,13.9-16c0.7-0.2,1.2-0.8,1.2-1.5v-5c0-0.6-0.3-1.1-0.8-1.3c-2.8-1.4-4.6-4.2-4.6-7.3v-4.8c0-4.5,3.7-8.2,8.2-8.2 s8.2,3.7,8.2,8.2v4.8c0,3.1-1.9,6-4.7,7.4c-0.5,0.2-0.9,0.8-0.9,1.4v4.8c0,0.7,0.5,1.3,1.2,1.5c1.7,0.4,3.3,1,4.8,1.8 c-0.2,1-0.3,2-0.3,3.1V48c0,1.6,0.3,3.2,0.8,4.7L7.5,52.7L7.5,52.7z M52.8,58.2c-0.5,0.2-0.9,0.8-0.9,1.4v6.4c0,0.7,0.5,1.3,1.2,1.5 c10.6,2.3,18.4,11.5,19.1,22.2H23.8c0.6-10.7,8.2-19.7,18.8-22.1c0.7-0.2,1.2-0.8,1.2-1.5v-6.6c0-0.6-0.3-1.1-0.8-1.3 c-3.9-1.9-6.3-5.8-6.3-10.1v-6.4c0-6.3,5.1-11.3,11.3-11.3s11.3,5.1,11.3,11.3V48C59.3,52.3,56.8,56.3,52.8,58.2z M61.5,52.7 c0.5-1.5,0.8-3.1,0.8-4.7v-6.4c0-0.9-0.1-1.9-0.3-2.7c1.6-1,3.4-1.7,5.2-2.1c0.7-0.2,1.2-0.8,1.2-1.5v-5c0-0.6-0.3-1.1-0.8-1.3 c-2.8-1.4-4.6-4.2-4.6-7.3v-4.8c0-4.5,3.7-8.2,8.2-8.2c4.5,0,8.2,3.7,8.2,8.2v4.8c0,3.1-1.9,6-4.7,7.4c-0.5,0.2-0.9,0.8-0.9,1.4v4.8 c0,0.7,0.5,1.3,1.2,1.5c7.7,1.7,13.4,8.3,14.1,16L61.5,52.7L61.5,52.7z"/>
                    </svg>
                  )}
                  {index === 4 && (
                    // Video Editing Training (custom SVG from user, white fill)
                    <svg width="36" height="36" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M170.666667 256h469.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v341.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V341.333333c0-46.933333 38.4-85.333333 85.333334-85.333333z" fill="#fff"/>
                      <path d="M938.666667 746.666667l-213.333334-128V405.333333l213.333334-128z" fill="#fff"/>
                    </svg>
                  )}
                  {index === 5 && (
                    // Exclusive 1-on-1 Coaching (custom SVG from user, white fill)
                    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.07l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.07-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.03 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.07-5.459 3.07-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.07-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.03 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z" fill="#fff"/>
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-center text-black mb-2" style={{fontFamily: 'Lora, serif'}}>{feature.title}</h3>
              <p className="text-sm text-gray-600 text-center max-w-[90%] mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive; 