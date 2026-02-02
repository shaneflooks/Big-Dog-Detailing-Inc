
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl relative h-full">
          <div className="grid-line left-0"></div>
          <div className="grid-line right-0"></div>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
