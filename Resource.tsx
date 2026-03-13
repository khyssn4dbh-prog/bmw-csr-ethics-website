import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { AIGeneratorButton } from '../components/AIGenerator';
import { ExternalLink, Globe, FileText, Info } from 'lucide-react';

const Resource = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-resource-hero/1920/1080" 
            alt="BMW i4" 
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
            Online <span className="font-bold text-bmw-blue">Resource</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW i4" description="Electric gran coupe in a clean, high-tech environment" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="BMW Group Sustainability" subtitle="External Resource" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl border-bmw-blue/30"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-bmw-blue/20 p-4 rounded-full">
                <Globe className="text-bmw-blue" size={32} />
              </div>
              <h3 className="text-3xl font-bold">BMW Group Sustainability Website</h3>
            </div>
            
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              The official BMW Group Sustainability website provides a comprehensive overview of the company's environmental goals, social initiatives, and ethical business practices. It features detailed reports on carbon reduction, resource efficiency, and supply chain transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <FileText className="text-bmw-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Sustainability Reports</h4>
                  <p className="text-white/40 text-sm">Access the latest annual reports on environmental and social performance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Info className="text-bmw-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Strategic Goals</h4>
                  <p className="text-white/40 text-sm">Learn about BMW's roadmap to climate neutrality by 2050.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.bmwgroup.com/en/sustainability.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-bmw-blue hover:bg-bmw-blue/80 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold transition-all group"
            >
              Visit Official Website <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resource;
