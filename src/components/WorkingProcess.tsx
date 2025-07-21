const WorkingProcess = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Here's our working Process
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="w-full max-w-2xl h-64 sm:h-80 bg-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-700">Video</span>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A comprehensive leadership transformation system designed to guarantee your success - or you get every penny back.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg border-2 border-yellow-400 transition-colors duration-300">
            Book Your Session Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess; 