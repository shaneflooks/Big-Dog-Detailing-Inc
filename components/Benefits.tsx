
import React from 'react';

const benefits = [
  {
    title: "Gold Ranked Detailers",
    description: "2025 Saint John CommunityVotes Gold Winner for Auto Detailing.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199d_Star--Streamline-Nova.png"
  },
  {
    title: "Heavy Fleet Experts",
    description: "Specialized pressure washing for transport trucks and trailers.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png"
  },
  {
    title: "Interior Specialists",
    description: "Deep steam cleaning and odor removal that local residents recommend.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png"
  },
  {
    title: "Fairville Blvd Location",
    description: "Easy access location in West Saint John for drop-offs and pick-ups.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png"
  },
  {
    title: "Attention to Detail",
    description: "Every nook and cranny cleaned. We don't cut corners, we clean them.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png"
  },
  {
    title: "Professional Grade",
    description: "Using only the best chemical and equipment for your vehicle's safety.",
    image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png"
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            The Big Dog Difference
          </div>
          <h2 className="text-5xl md:text-6xl font-medium mb-8">
            Quality you can <span className="italic">actually</span> see
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Big Dog Detailing Inc. has built a massive reputation in Saint John for delivering unmatched interior and exterior transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-[2.5rem] p-12 mb-8 flex items-center justify-center overflow-hidden transition-all hover:bg-gray-100 min-h-[300px]">
                <img src={benefit.image} alt={benefit.title} className="w-32 h-32 object-contain transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
