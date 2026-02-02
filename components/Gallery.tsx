
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop",
      title: "Interior Deep Clean"
    },
    {
      url: "https://images.unsplash.com/photo-1552933529-e359b2477262?q=80&w=800&auto=format&fit=crop",
      title: "Exterior Polish"
    },
    {
      url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop",
      title: "Wheel Detailing"
    },
    {
      url: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop",
      title: "Engine Bay Cleaning"
    },
    {
      url: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=800&auto=format&fit=crop",
      title: "Foam Bath"
    },
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
      title: "Showroom Finish"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              Our Work
            </div>
            <h2 className="text-5xl md:text-6xl font-medium leading-tight mb-6">
              Recent results from the <span className="italic">shop</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              We take pride in every vehicle that rolls through 843 Fairville Blvd. Check out some of our latest transformations.
            </p>
          </div>
          <a 
            href="https://www.facebook.com/100091059275892/photos/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-sm group"
          >
            <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            See more on Facebook
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200 border border-gray-100 shadow-sm">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-lg">{img.title}</p>
                <p className="text-white/80 text-sm">Verified Detailing Success</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
