import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { AIGeneratorButton } from '../components/AIGenerator';
import { CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';

const Conclusion = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-conclusion-hero/1920/1080" 
            alt="Conclusion" 
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
            Reflective <span className="font-bold text-bmw-blue">Conclusion</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW i7" description="The flagship BMW i7 in a prestigious setting" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Summary of Commitment" subtitle="Final Thoughts" />
          
          <p className="text-white/60 text-xl leading-relaxed mb-20 text-center italic">
            "BMW's journey towards a sustainable future is not just about changing the powertrain; it's about changing the entire philosophy of automotive manufacturing."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strengths */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-3xl border-emerald-500/20"
            >
              <div className="flex items-center space-x-4 mb-8">
                <TrendingUp className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-bold">Key Strengths</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Electric Innovation", desc: "Rapid expansion of the 'i' sub-brand and pioneering battery technology." },
                  { title: "Sustainable Manufacturing", desc: "100% renewable energy use at all production sites and circular economy focus." },
                  { title: "Employee Support", desc: "Exceptional wellness programs and continuous professional development." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Areas for Improvement */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-3xl border-amber-500/20"
            >
              <div className="flex items-center space-x-4 mb-8">
                <AlertCircle className="text-amber-500" size={32} />
                <h3 className="text-2xl font-bold">Areas for Growth</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Supply Chain Sustainability", desc: "Ensuring 100% transparency and ethical standards across thousands of global suppliers." },
                  { title: "Ethical Sourcing", desc: "Addressing the complex challenges of sourcing raw materials like cobalt and lithium." },
                  { title: "Infrastructure Development", desc: "Collaborating to expand global charging networks for seamless EV adoption." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              As BMW continues to innovate, its commitment to Corporate Social Responsibility remains a cornerstone of its global strategy. The transition to electric mobility, combined with ethical business practices, positions the BMW Group as a leader in the future of sustainable luxury.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Conclusion;
