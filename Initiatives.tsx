import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/Layout';
import { AIGeneratorButton } from '../components/AIGenerator';
import { Zap, Leaf, GraduationCap, Globe } from 'lucide-react';

const Initiatives = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-initiatives-hero/1920/1080" 
            alt="Sustainability" 
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
            Social Responsibility <br />
            <span className="font-bold text-bmw-blue">Initiatives</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW iX" description="Electric SUV in a futuristic sustainable city" />
          </div>
        </div>
      </section>

      {/* Electric Mobility */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading title="Electric Mobility & Climate Protection" subtitle="Zero Emissions" />
            <div className="flex items-start space-x-6 mb-8">
              <div className="bg-bmw-blue/10 p-4 rounded-xl">
                <Zap className="text-bmw-blue" size={32} />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  The BMW Group is accelerating its transition to electric mobility. With models like the BMW i4, BMW iX, and the luxury BMW i7, we are proving that sustainability and high performance go hand-in-hand.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Our goal is to have at least 50% of our global sales come from fully electric vehicles by 2030. We are also committed to reducing CO2 emissions per vehicle by 40% across the entire lifecycle compared to 2019 levels.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://picsum.photos/seed/bmw-i4-init/800/600" 
              alt="BMW i4" 
              className="rounded-xl h-64 w-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="mt-2">
              <AIGeneratorButton vehicleName="BMW i4" description="Electric Gran Coupe" className="!py-1 !px-2 !text-[8px]" />
            </div>
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              src="https://picsum.photos/seed/bmw-ix-init/800/600" 
              alt="BMW iX" 
              className="rounded-xl h-64 w-full object-cover mt-8" 
              referrerPolicy="no-referrer" 
            />
            <div className="mt-2">
              <AIGeneratorButton vehicleName="BMW iX" description="Sustainable SUV" className="!py-1 !px-2 !text-[8px]" />
            </div>
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://picsum.photos/seed/bmw-i7-init/800/600" 
              alt="BMW i7" 
              className="rounded-xl h-64 w-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="mt-2">
              <AIGeneratorButton vehicleName="BMW i7" description="Luxury Electric Sedan" className="!py-1 !px-2 !text-[8px]" />
            </div>
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              src="https://picsum.photos/seed/bmw-i4m-init/800/600" 
              alt="BMW i4 M Sport" 
              className="rounded-xl h-64 w-full object-cover mt-8" 
              referrerPolicy="no-referrer" 
            />
            <div className="mt-2">
              <AIGeneratorButton vehicleName="BMW i4 M Sport" description="Sporty Electric Coupe" className="!py-1 !px-2 !text-[8px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/bmw-ix-design/1200/800" 
                alt="BMW iX Sustainable Design" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bmw-blue/5 rounded-2xl" />
            </motion.div>
            <div className="mt-4 flex justify-center">
              <AIGeneratorButton vehicleName="BMW iX" description="Sustainable manufacturing concept" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <SectionHeading title="Sustainable Manufacturing" subtitle="Circular Economy" />
            <div className="flex items-start space-x-6">
              <div className="bg-bmw-blue/10 p-4 rounded-xl">
                <Leaf className="text-bmw-blue" size={32} />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  We are rethinking production from the ground up. All BMW Group production sites worldwide already use 100% renewable energy. We are also increasing the use of secondary materials—recycled steel, aluminum, and plastics—to reduce our reliance on raw materials.
                </p>
                <ul className="space-y-4 text-white/50 text-sm">
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue" />
                    <span>Closed-loop material cycles for aluminum and steel.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue" />
                    <span>Significant reduction in water consumption and waste.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue" />
                    <span>Innovative paint processes that save energy and water.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Education */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading title="Community & Education Programs" subtitle="Social Impact" />
            <p className="text-white/60 text-lg leading-relaxed">
              Through the BMW Foundation Herbert Quandt and our global corporate citizenship programs, we promote social innovation and STEM education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 rounded-2xl">
              <GraduationCap className="text-bmw-blue mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">STEM Education</h3>
              <p className="text-white/50 leading-relaxed">
                We support educational initiatives that inspire the next generation of engineers and innovators. By providing access to technology and mentorship, we help bridge the skills gap in science, technology, engineering, and mathematics.
              </p>
            </div>
            <div className="glass p-12 rounded-2xl">
              <Globe className="text-bmw-blue mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">BMW Foundation</h3>
              <p className="text-white/50 leading-relaxed">
                The BMW Foundation Herbert Quandt inspires leaders worldwide to take social responsibility and work towards a peaceful, just, and sustainable future in line with the UN 2030 Agenda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;
