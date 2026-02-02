
import React, { useState } from 'react';

const faqs = [
  {
    question: "Do you offer mobile detailing?",
    answer: "Currently, we focus on our high-quality shop-based services at 843 Fairville Blvd to ensure we have access to all our professional-grade tools and lighting for the best results."
  },
  {
    question: "How long does a full detail take?",
    answer: "A standard full detail typically takes 4-6 hours depending on the condition of the vehicle. We recommend dropping it off in the morning."
  },
  {
    question: "Do you detail transport trucks?",
    answer: "Yes! We are one of the few shops in Saint John equipped for pressure washing and detailing transport trucks and trailers."
  },
  {
    question: "Do I need an appointment?",
    answer: "While we sometimes have same-day openings, we highly recommend booking in advance as our schedule fills up quickly, especially during spring and fall."
  },
  {
    question: "What's included in an interior detail?",
    answer: "Our interior package includes vacuuming, steam cleaning, upholstery shampooing, leather conditioning, window cleaning, and detailed cleaning of all cracks and crevices."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-medium leading-tight mb-12">
              <span className="italic">Common</span> detailing questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-100 pb-6 cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {faq.question}
                    </h4>
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-gray-500 font-medium text-lg animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-32">
            <div className="bg-gray-50 rounded-[3rem] p-12 text-center border border-gray-200 shadow-sm">
               <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-3xl p-4 shadow-inner border border-gray-100 flex items-center justify-center">
                  <span className="text-5xl">🚗</span>
               </div>
               <h3 className="text-3xl font-bold mb-8">Ready for a clean ride?</h3>
               <a 
                href="tel:506-607-2399" 
                className="block w-full py-5 bg-black text-white rounded-2xl text-lg font-bold hover:bg-gray-800 transition-all mb-8"
               >
                 Call 506-607-2399
               </a>

               <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">
                  Find us on Fairville Blvd
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
