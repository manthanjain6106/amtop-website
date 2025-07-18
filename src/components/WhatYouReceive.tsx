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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What You'll Receive in This{" "}
            <span className="text-orange-500">Exclusive Program</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            A comprehensive leadership transformation system designed to guarantee your success - or you get every penny back
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive; 