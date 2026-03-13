import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Leaf, Shield, Globe } from 'lucide-react';
import { SectionHeading, StatCounter } from '../components/Layout';
import { STATS } from '../constants';
import { AIGeneratorButton } from '../components/AIGenerator';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-i7-luxury/1920/1080" 
            alt="BMW i7 Luxury Sedan" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-bmw-blue text-xs uppercase tracking-[0.5em] font-bold mb-6 block">
              The Future of Mobility
            </span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-none">
              BMW Corporate <br />
              <span className="font-bold text-bmw-blue">Social Responsibility</span>
            </h1>
            <p className="text-xl text-white/70 font-light mb-12 max-w-lg leading-relaxed">
              Exploring sustainability, ethical leadership, and innovation within the BMW Group.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-wrap gap-6">
                <Link to="/overview" className="bg-bmw-blue hover:bg-bmw-blue/80 text-white px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all flex items-center group">
                  Discover More <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <AIGeneratorButton 
                  vehicleName="BMW i7" 
                  description="Luxury electric sedan in a futuristic sustainable city" 
                  style="architectural"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-bmw-blue to-transparent" />
        </motion.div>
      </section>

      {/* About BMW */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading title="About BMW" subtitle="Global Leadership" />
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              The BMW Group is the world's leading luxury manufacturer of automobiles and motorcycles and a provider of premium financial and mobility services. As a global company, the BMW Group operates over 30 production and assembly facilities in 15 countries and has a global sales network in more than 140 countries.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Our success has always been based on long-term thinking and responsible action. We have therefore established ecological and social sustainability throughout the value chain, comprehensive product responsibility and a clear commitment to conserving resources as an integral part of our strategy.
            </p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/bmw-performance/1200/800" 
                alt="BMW Performance" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="mt-4 flex justify-center">
              <AIGeneratorButton vehicleName="BMW M3" description="High-performance sports sedan in a urban setting" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-xl hidden md:block">
              <div className="grid grid-cols-2 gap-8">
                {STATS.slice(0, 2).map(stat => (
                  <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Mission */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <img 
            src="https://picsum.photos/seed/bmw-ix-electric/1200/800" 
            alt="BMW iX" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading title="Sustainability Mission" subtitle="Our Commitment" />
          <div className="mb-8">
            <AIGeneratorButton vehicleName="BMW iX" description="Electric SUV in a sustainable forest environment" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Environmental Responsibility", desc: "Reducing our carbon footprint across the entire lifecycle of our vehicles." },
              { icon: Zap, title: "Sustainable Mobility", desc: "Leading the transition to electric mobility with innovative technology." },
              { icon: Shield, title: "Ethical Leadership", desc: "Maintaining the highest standards of integrity and corporate governance." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-2xl hover:border-bmw-blue/50 transition-colors group"
              >
                <item.icon className="text-bmw-blue mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Electric Mobility */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img 
                src="https://picsum.photos/seed/bmw-innovation/1200/800" 
                alt="BMW Electric Innovation" 
                className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bmw-blue/10 rounded-2xl group-hover:bg-transparent transition-colors" />
            </motion.div>
            <div className="mt-6">
              <AIGeneratorButton vehicleName="BMW iX" description="Close up of the front grille and headlights of a BMW iX" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <SectionHeading title="Innovation and Electric Mobility" subtitle="The Future is Electric" />
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              BMW is at the forefront of the electric revolution. Our "Neue Klasse" represents the next generation of BMW vehicles, focused on being electric, digital, and circular.
            </p>
            <ul className="space-y-6">
              {[
                "Pioneering battery technology for longer range and faster charging.",
                "Circular design principles to maximize material recyclability.",
                "Digital integration for a seamless and intelligent driving experience."
              ].map((text, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-bmw-blue/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-bmw-blue" />
                  </div>
                  <span className="text-white/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Responsibility */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Corporate Responsibility" subtitle="Ethical Business" />
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            "For the BMW Group, sustainability means more than just building electric cars. It means taking responsibility for our employees, the environment, and society as a whole."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map(stat => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
