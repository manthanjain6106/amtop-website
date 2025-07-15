const ExpertCredentials = () => {
  const experts = [
    {
      name: "YU-KAI",
      image: "/images/yu-kai.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "MARK DIAZ",
      image: "/images/mark-diaz.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#1B1C2B' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            BONUS: Expert Credentials Included
          </h2>
        </div>

        {/* Expert Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              {/* Name */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6 tracking-wider">
                {expert.name}
              </h3>
              
              {/* Image */}
              <div className="mb-4 sm:mb-6">
                <div className="relative inline-block">
                  <div className="w-48 h-60 sm:w-64 sm:h-80 rounded-lg border-2 border-yellow-400 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="text-left">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCredentials; 