
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#dc2626] flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border border-[#facc15] flex items-center justify-center">
                   <span className="text-[#1e3a8a] font-black text-xl italic leading-none">B</span>
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-[#dc2626] font-black text-2xl tracking-tighter leading-none">BIGDOG</span>
                <span className="text-[#1e3a8a] font-bold text-sm tracking-[0.2em] leading-none uppercase">Detailing</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <a 
            href="#pricing" 
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Services
          </a>
          <a 
            href="tel:506-607-2399" 
            className="flex items-center gap-2 px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <img 
              src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19bf_Phone--Streamline-Ultimate%20(1).svg" 
              className="w-4 h-4" 
              alt="" 
            />
            506-607-2399
          </a>
          <a 
            href="#book" 
            className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
