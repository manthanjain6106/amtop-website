const ExpertCredentials = () => {
  const experts = [
    {
      name: "YU-KAI CHOU",
      image: "/images/yu-kai.png",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas amet aliquam convallis lobortis at condimentum et nam aliquet. Pellentesque turpis consectetur purus neque lectus tellus egestas egestas. Lorem ipsum dolor sit amet consectetur. Egestas amet aliquam convallis lobortis at condimentum et nam aliquet. Pellentesque turpis consectetur purus neque lectus tellus egestas egestas."
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
        <div className="max-w-4xl mx-auto">
          {experts.map((expert, index) => (
            <div key={index}>
              {/* Name */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-6 sm:mb-8 tracking-wider text-left" style={{ fontFamily: 'Lora, serif' }}>
                {expert.name}
              </h3>
              
              {/* Content - Image and Text Side by Side */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-80 h-60 sm:w-96 sm:h-72 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(251,191,36,0.3)] sm:shadow-[0_0_18px_rgba(251,191,36,0.3)]">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 15%', transform: 'scale(1.1)' }}
                    />
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {expert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCredentials; 