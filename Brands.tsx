import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { AIGeneratorButton } from '../components/AIGenerator';

const Brands = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-brands-hero/1920/1080" 
            alt="BMW M8" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light tracking-tight"
          >
            BMW <span className="font-bold text-bmw-blue">Sub-Brands</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW M8" description="High-performance luxury coupe" />
          </div>
        </div>
      </section>

      {/* BMW M */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading title="BMW M" subtitle="High Performance" />
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              BMW M ("M" for Motorsport) was initially created to facilitate BMW's racing program. Over time, it has become the brand for the most powerful and performance-oriented BMW vehicles, combining track-ready dynamics with everyday luxury.
            </p>
            <div className="glass p-8 rounded-2xl border-bmw-blue/20">
              <h4 className="text-xl font-bold mb-4">The M4 Competition</h4>
              <p className="text-white/50 text-sm">A masterpiece of engineering, delivering uncompromising power and precision handling for the ultimate driving experience.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/bmw-m4-brand/1200/800" 
              alt="BMW M4" 
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <AIGeneratorButton vehicleName="BMW M4" description="Sports coupe on a racetrack" />
          </div>
        </div>
      </section>

      {/* BMW i */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/bmw-ix-brand/1200/800" 
                alt="BMW iX" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <AIGeneratorButton vehicleName="BMW iX" description="Electric SUV in a modern architectural setting" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <SectionHeading title="BMW i" subtitle="Electric Mobility" />
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              BMW i is the sub-brand for visionary vehicles and mobility services, inspiring design and a new understanding of premium that is strongly defined by sustainability. It represents the future of electric driving.
            </p>
            <div className="glass p-8 rounded-2xl border-bmw-blue/20">
              <h4 className="text-xl font-bold mb-4">BMW iX</h4>
              <p className="text-white/50 text-sm">The flagship of electric mobility, combining innovative technology with a lounge-like interior for a unique driving experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BMW Performance */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="BMW Performance" subtitle="Driving Dynamics" />
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            The ultimate driving machine. Every BMW is engineered to deliver a unique blend of performance, agility, and luxury, ensuring that every journey is an experience to remember.
          </p>
          <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl">
             <img 
              src="https://picsum.photos/seed/bmw-m3-brand/1200/800" 
              alt="BMW M3 Performance" 
              className="w-full aspect-[21/9] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <AIGeneratorButton vehicleName="BMW M3 Performance" description="Aggressive sports sedan in motion" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
