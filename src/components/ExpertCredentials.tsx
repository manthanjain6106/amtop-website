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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Lora, serif' }}>
            BONUS: Expert Credentials Included
          </h2>
        </div>

        {/* Expert Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              {/* Name */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6 tracking-wider" style={{ fontFamily: 'Lora, serif' }}>
                {expert.name}
              </h3>
              
              {/* Image */}
              <div className="mb-4 sm:mb-6">
                <div className="relative inline-block">
                  <div className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(251,191,36,0.3)] sm:shadow-[0_0_18px_rgba(251,191,36,0.3)] md:shadow-[0_0_20px_rgba(251,191,36,0.3)] lg:shadow-[0_0_22px_rgba(251,191,36,0.3)]">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 15%', transform: 'scale(1.1)' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="text-left">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
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