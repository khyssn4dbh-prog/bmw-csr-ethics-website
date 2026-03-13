import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading, StatCounter } from '../components/Layout';
import { STATS } from '../constants';
import { AIGeneratorButton } from '../components/AIGenerator';
import { History, Package, Globe } from 'lucide-react';

const Overview = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-overview-hero/1920/1080" 
            alt="BMW Luxury" 
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
            Company <span className="font-bold text-bmw-blue">Overview</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW 7 Series" description="Luxury sedan driving through a modern city at night" />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading title="History of BMW" subtitle="Since 1916" />
            <div className="flex items-start space-x-6 mb-8">
              <div className="bg-bmw-blue/10 p-4 rounded-xl">
                <History className="text-bmw-blue" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Founded in Munich</h3>
                <p className="text-white/50 leading-relaxed">
                  BMW (Bayerische Motoren Werke) was founded in 1916 in Munich, Germany. Originally an aircraft engine manufacturer, it transitioned to motorcycles and eventually luxury automobiles, becoming a global icon of engineering excellence.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/bmw-history/1200/800" 
              alt="BMW History" 
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="mt-4 flex justify-center">
            <AIGeneratorButton vehicleName="BMW M5" description="High-performance sedan on a mountain road" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Products" subtitle="Premium Portfolio" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Vehicles", desc: "Setting benchmarks in comfort, design, and driving dynamics.", img: "https://picsum.photos/seed/bmw-luxury-cat/800/600" },
              { title: "Electric Vehicles", desc: "Pioneering the future of sustainable mobility with the BMW i brand.", img: "https://picsum.photos/seed/bmw-electric-cat/800/600" },
              { title: "Classic Heritage", desc: "Celebrating decades of automotive excellence and iconic design.", img: "https://picsum.photos/seed/bmw-classic-cat/800/600" }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden"
              >
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{product.desc}</p>
                  <AIGeneratorButton vehicleName={product.title} description={product.desc} className="!py-2 !px-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading title="Global Presence" subtitle="Worldwide Impact" />
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                With operations in more than 140 countries and a workforce of over 150,000 employees worldwide, the BMW Group is a truly global player. Our manufacturing facilities are spread across 15 countries, ensuring we are close to our customers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {STATS.map(stat => (
                  <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass p-4 rounded-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/bmw-global/1200/800" 
                  alt="BMW Global" 
                  className="rounded-xl w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <AIGeneratorButton vehicleName="BMW 5 Series" description="Elegant business sedan in a professional environment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
