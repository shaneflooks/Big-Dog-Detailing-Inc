
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              2025 GOLD WINNER - SAINT JOHN COMMUNITYVOTES
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-8">
              Welcome to <br />
              <span className="text-italics italic">Big Dog Detailing Inc!!</span>
            </h1>
            <div className="space-y-6">
              <p className="text-xl text-gray-900 font-semibold leading-relaxed">
                Now offering a variety of Detailing Services to meet all of your needs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Transport Trucks & Trailers", "Cars", "Trucks", "SUV's", "Boats", "Fleet Vehicles"].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-bold border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-500 font-medium max-w-lg">
                Saint John's premier choice for professional transformations. Conveniently located on Fairville Blvd.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-center hover:bg-gray-800 transition-all"
              >
                View Services
              </a>
              <a 
                href="tel:506-607-2399" 
                className="px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Call (506) 607-2399
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6">
                 <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    OPEN 8AM - 5PM
                 </div>
              </div>
              
              <div className="space-y-1 mb-12 pt-4">
                <h3 className="text-4xl font-semibold leading-tight">Get that</h3>
                <h3 className="text-4xl font-semibold leading-tight">Showroom Shine</h3>
              </div>
              
              <p className="text-lg text-gray-500 mb-12">Expert care for your vehicle, inside and out.</p>
              
              <a 
                href="#book" 
                className="block w-full text-center py-5 bg-black text-white rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-[1.02]"
              >
                Book Appointment
              </a>

              <div className="mt-6 flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-xs">
                    BDD
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Ready for a wash?</div>
                    <div className="text-xs text-gray-500 font-medium">Located on the West Side</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none -mb-8 -mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=800&auto=format&fit=crop" 
                  className="w-96 rounded-full rotate-12" 
                  alt="Professional Detailing" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
