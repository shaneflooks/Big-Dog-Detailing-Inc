
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Footer: React.FC = () => {
  const [mapInfo, setMapInfo] = useState<string>('');
  const [mapUrl, setMapUrl] = useState<string>('');
  const address = "843 Fairville Blvd, Saint John, NB E2M 5T9";
  const landmark = "(Where Cox Electronics' used to be 😉)";
  const encodedAddress = encodeURIComponent(address);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-lite-latest",
          contents: `Describe the location 843 Fairville Blvd in Saint John, NB. Mention it is conveniently located on the West Side for easy vehicle drop-offs for locals.`,
          config: {
            tools: [{ googleMaps: {} }],
            toolConfig: {
              retrievalConfig: {
                latLng: {
                  latitude: 45.2447,
                  longitude: -66.1158
                }
              }
            }
          },
        });
        setMapInfo(response.text || '');
        const mapLink = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.find(c => c.maps)?.maps?.uri;
        if (mapLink) setMapUrl(mapLink);
      } catch (e) {
        console.error("Failed to fetch maps grounding", e);
      }
    };
    fetchLocationData();
  }, []);

  return (
    <footer id="book" className="bg-black text-white py-32 rounded-t-[4rem] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#dc2626] flex items-center justify-center relative bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full border border-[#facc15] flex items-center justify-center">
                   <span className="text-white font-black text-2xl italic leading-none">B</span>
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-white font-black text-3xl tracking-tighter leading-none">BIGDOG</span>
                <span className="text-[#facc15] font-bold text-xs tracking-[0.3em] leading-none uppercase">Detailing</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-medium leading-[1.1]">
              The best detailing <br />
              <span className="italic opacity-60">in Saint John</span>
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xl text-white font-bold max-w-lg">
                  {address}
                </p>
                <p className="text-lg text-yellow-400 font-medium italic">
                  {landmark}
                </p>
              </div>
              <p className="text-xl text-gray-400 font-medium max-w-lg">
                Call Now: (506) 607-2399
              </p>
              <div className="inline-block bg-white/10 px-4 py-2 rounded-xl text-sm font-bold border border-white/10">
                Open Mon-Fri: 8:00 AM - 5:00 PM
              </div>
            </div>

            <div className="pt-20">
              <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">
                Proudly Serving Greater Saint John
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-sm font-bold hover:opacity-100 transition-opacity opacity-60">Terms</a>
                <a href="#" className="text-sm font-bold hover:opacity-100 transition-opacity opacity-60">Privacy</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[3rem] p-10 backdrop-blur-xl border border-white/10">
             <div className="bg-white/10 p-6 rounded-2xl mb-8">
               <p className="text-sm font-semibold text-yellow-400">
                 Conveniently located on the West Side of Saint John. Book your appointment today!
               </p>
             </div>
             
             <div className="bg-black rounded-3xl overflow-hidden border border-white/10 relative h-[450px] shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade"
                  srcDoc={`
                    <style>body{margin:0;background:#111;}</style>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      frameborder="0" 
                      style="border:0; filter: grayscale(1) invert(1) contrast(1.2);" 
                      src="https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                  `}
                  title="Big Dog Detailing Location"
                ></iframe>

                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 pointer-events-auto shadow-2xl">
                    <p className="text-xs text-gray-300 font-medium mb-3">
                      {mapInfo || 'Visit us on the West Side! We are located in the building previously occupied by Cox Electronics.'}
                    </p>
                    <a 
                      href={mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black text-center rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm"
                    >
                      Open in Google Maps
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[200px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
