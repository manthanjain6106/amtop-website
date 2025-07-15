const WorkingProcess = () => {
  const processSteps = [
    "Complete Program Commitment",
    "Active Implementation", 
    "Regular Check-ins",
    "$100K Sales Goal"
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Here's our working Process
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Section - Process Steps */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full flex-shrink-0 mt-1 sm:mt-2"></div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Right Section - Video Placeholder */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-md h-48 sm:h-64 bg-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center">
              <span className="text-lg sm:text-2xl font-bold text-gray-700">Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess; 