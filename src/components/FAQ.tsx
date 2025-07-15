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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Quis mattis dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between text-white font-bold hover:bg-gray-700 transition-colors"
              >
                <span className="flex items-center text-sm sm:text-base">
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-left">{item.question}</span>
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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