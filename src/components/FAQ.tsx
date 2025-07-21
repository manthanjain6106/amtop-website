"use client";

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Will this work in my niche?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "How quickly can I expect results?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Do you run the ads or just deliver creative strategy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "How is this different from hiring a freelancer or agency?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "What platforms does this work on?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#d3d6df] to-[#f6eddc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Lora, serif' }}>
            Quis mattis dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between text-white font-bold hover:bg-gray-700 transition-colors"
              >
                <span className="flex items-center text-base sm:text-lg md:text-xl">
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-left" style={{ fontFamily: 'Lora, serif' }}>{item.question}</span>
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 