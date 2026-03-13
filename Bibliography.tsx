import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { BookOpen, Link as LinkIcon } from 'lucide-react';

const Bibliography = () => {
  const sources = [
    {
      title: "BMW Group Sustainability Website",
      desc: "Official portal for BMW's environmental and social reporting.",
      url: "https://www.bmwgroup.com/en/sustainability.html"
    },
    {
      title: "BMW Foundation Herbert Quandt",
      desc: "Information on social innovation and leadership initiatives.",
      url: "https://bmw-foundation.org/"
    },
    {
      title: "BMW Group Report 2024",
      desc: "Comprehensive annual report covering financial and sustainability performance.",
      url: "https://www.bmwgroup.com/en/investor-relations/reports.html"
    },
    {
      title: "Circular Economy at BMW",
      desc: "Detailed overview of the 'Neue Klasse' and circular design principles.",
      url: "https://www.bmw.com/en/innovation/circular-economy.html"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1974&auto=format&fit=crop" 
            alt="BMW Welt Munich" 
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
            Sources & <span className="font-bold text-bmw-blue">Bibliography</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="References" subtitle="Academic Rigor" />
          
          <div className="space-y-6">
            {sources.map((source, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl flex items-center justify-between group hover:border-bmw-blue/40 transition-all"
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-bmw-blue/10 p-4 rounded-xl">
                    <BookOpen className="text-bmw-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{source.title}</h3>
                    <p className="text-white/40 text-sm">{source.desc}</p>
                  </div>
                </div>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-bmw-blue transition-colors"
                >
                  <LinkIcon size={20} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 glass rounded-3xl text-center">
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] leading-relaxed">
              This website was created for educational purposes to showcase the Corporate Social Responsibility initiatives of the BMW Group. All data and information are based on publicly available corporate reports and official BMW communications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bibliography;
