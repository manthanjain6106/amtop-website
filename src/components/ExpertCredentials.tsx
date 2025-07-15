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
    <section className="py-16" style={{ backgroundColor: '#1B1C2B' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            BONUS: Expert Credentials Included
          </h2>
        </div>

        {/* Expert Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 tracking-wider">
                {expert.name}
              </h3>
              
              {/* Image */}
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="w-64 h-80 rounded-lg border-2 border-yellow-400 overflow-hidden">
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
                <p className="text-gray-200 leading-relaxed">
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