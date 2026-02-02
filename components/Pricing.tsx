
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            Services
          </div>
          <h2 className="text-5xl md:text-6xl font-medium leading-tight">
            Professional packages <br />
            <span className="italic">tailored to your vehicle</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-gray-50 rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
               <div className="bg-black text-white px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2 w-fit mb-8">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  FLEET SERVICES AVAILABLE
               </div>
               <h3 className="text-5xl font-semibold mb-2 leading-none">Big Dog</h3>
               <h3 className="text-5xl font-semibold leading-none">Full Detail</h3>
             </div>
             <div className="mt-10 space-y-4 relative z-10">
                <p className="text-gray-600 font-medium">We specialize in everything from daily drivers to heavy-duty transport trailers.</p>
             </div>
             <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a8_Group%201171274554.png" className="absolute bottom-0 right-0 w-3/4 opacity-10" alt="" />
          </div>

          <div className="flex-1 bg-white border border-gray-200 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-3xl font-bold">Standard Auto</h3>
                <span className="text-[10px] font-bold bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest">
                  Sedans & Small SUVs
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-7xl font-bold tracking-tighter">Call</span>
                <span className="text-gray-400 font-medium">for quote</span>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <BenefitItem text="Deep Interior Steam" />
                  <BenefitItem text="Exterior Hand Wash" />
                  <BenefitItem text="Wheel & Tire Shine" />
                  <BenefitItem text="Windows In/Out" />
                </div>
                <div className="space-y-4">
                  <BenefitItem text="Clay Bar Treatment" />
                  <BenefitItem text="Upholstery Shampoo" />
                  <BenefitItem text="Trim Restoration" />
                </div>
              </div>
            </div>

            <a 
              href="tel:506-607-2399" 
              className="block w-full py-6 bg-black text-white rounded-2xl text-xl font-bold hover:bg-gray-800 transition-all text-center flex items-center justify-center gap-4 group"
            >
              <span className="bg-white/10 p-1 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Book your slot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
    {text}
  </div>
);

export default Pricing;
