
import React from 'react';

const HowItWorks: React.FC = () => {
  const services = [
    "Interior Deep Clean", "Exterior Wash", "Wax & Polish", "Ceramic Coating", "Engine Bay", "Fleet Pressure Wash", "Truck & Trailer", "Boat Detailing", "Headlight Restoration", "Stain Removal", "Odor Elimination", "SUV Package", "Sedan Detail", "Transport Trucks"
  ];

  return (
    <section className="py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-medium max-w-3xl leading-tight">
            The way your vehicle <span className="italic">should</span> be cared for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="group bg-gray-50 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] overflow-hidden relative">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Book</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Call (506) 607-2399 or drop by our Fairville Blvd location to pick your package.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1977_price.svg" alt="Pricing" className="w-full opacity-20" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="group bg-gray-50 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] overflow-hidden relative">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Select Services</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                From daily drivers to heavy transport trailers and boats.
              </p>
            </div>
            <div className="mt-8 space-y-3 overflow-hidden">
               <div className="marquee-container">
                  <div className="marquee-content flex gap-3">
                    {[...services, ...services].map((s, i) => (
                      <span key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
               </div>
               <div className="marquee-container" style={{ direction: 'rtl' }}>
                  <div className="marquee-content flex gap-3">
                    {[...services, ...services].map((s, i) => (
                      <span key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group bg-gray-50 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] overflow-hidden relative">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Drive Happy</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Pick up your vehicle looking brand new from our West Side shop.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl rotate-6 transform translate-y-4"></div>
                <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl -rotate-12 transform translate-x-2"></div>
                <div className="absolute inset-0 bg-white border border-gray-300 rounded-2xl shadow-xl flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
