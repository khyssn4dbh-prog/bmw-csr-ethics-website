import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { AIGeneratorButton } from '../components/AIGenerator';
import { Users, ShieldCheck, Heart, Scale } from 'lucide-react';

const Wellness = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-wellness-hero/1920/1080" 
            alt="BMW i7 Luxury" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light tracking-tight"
          >
            Employee <span className="font-bold text-bmw-blue">Wellness</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW i7" description="Interior of a luxury BMW i7 with ambient lighting" />
          </div>
        </div>
      </section>

      {/* Development & Safety */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-12 rounded-2xl">
            <Users className="text-bmw-blue mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Employee Development</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              We invest heavily in the continuous training and development of our employees. Our career growth opportunities ensure that our workforce is prepared for the digital and electric future of the automotive industry.
            </p>
            <ul className="space-y-3 text-sm text-white/40">
              <li>• Specialized training for EV production</li>
              <li>• Leadership development programs</li>
              <li>• International career opportunities</li>
            </ul>
          </div>
          <div className="glass p-12 rounded-2xl">
            <ShieldCheck className="text-bmw-blue mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Workplace Safety</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              The health and safety of our employees is our top priority. We maintain state-of-the-art manufacturing environments with rigorous safety protocols and ergonomic workstations to protect our team.
            </p>
            <ul className="space-y-3 text-sm text-white/40">
              <li>• Zero-accident vision</li>
              <li>• Advanced protective equipment</li>
              <li>• Ergonomic production design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Wellness Programs" subtitle="Health & Balance" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <Heart className="text-bmw-blue shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Health & Mental Support</h4>
                  <p className="text-white/50">Comprehensive health programs, including on-site medical services and mental health support, to ensure our employees thrive both personally and professionally.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <Scale className="text-bmw-blue shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Work-Life Balance</h4>
                  <p className="text-white/50">Flexible working models, childcare support, and sabbatical options to help our employees balance their professional responsibilities with their personal lives.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
               <img 
                src="https://picsum.photos/seed/bmw-interior-wellness/1200/800" 
                alt="BMW i4 Interior Innovation" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <AIGeneratorButton vehicleName="BMW i4 Interior" description="Curved display and dashboard of a BMW i4" />
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Code of Conduct" subtitle="Ethical Standards" />
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            The BMW Group Code of Conduct defines our ethical standards and provides a framework for responsible behavior. It is binding for all employees worldwide and covers key areas such as anti-corruption, human rights, and fair competition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Anti-Corruption Policies",
              "Human Rights Protection",
              "Responsible Behavior"
            ].map((item, i) => (
              <div key={i} className="glass py-8 px-4 rounded-xl border-bmw-blue/20">
                <span className="text-sm font-bold tracking-widest uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wellness;
