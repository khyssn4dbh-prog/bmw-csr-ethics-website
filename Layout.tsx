import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe, Shield, Users, Zap, Leaf, Award } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Overview', path: '/overview' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Wellness', path: '/wellness' },
    { name: 'Showcase', path: '/showcase' },
    { name: 'Brands', path: '/brands' },
    { name: 'Resource', path: '/resource' },
    { name: 'Conclusion', path: '/conclusion' },
    { name: 'Bibliography', path: '/bibliography' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full border-2 border-bmw-blue flex items-center justify-center overflow-hidden bg-white">
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW Logo" className="w-8 h-8" referrerPolicy="no-referrer" />
          </div>
          <span className="font-bold tracking-widest text-xl uppercase">BMW Group</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-medium transition-colors hover:text-bmw-blue ${isActive ? 'text-bmw-blue' : 'text-white/70'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 lg:hidden z-[-1]" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 py-8 px-6 flex flex-col space-y-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest font-medium transition-colors ${isActive ? 'text-bmw-blue' : 'text-white/70'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-black py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-full border border-bmw-blue flex items-center justify-center bg-white">
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW Logo" className="w-6 h-6" referrerPolicy="no-referrer" />
          </div>
          <span className="font-bold tracking-widest text-lg uppercase">BMW Group</span>
        </div>
        <p className="text-white/50 max-w-md leading-relaxed">
          The BMW Group is the world's leading luxury manufacturer of automobiles and motorcycles and a provider of premium financial and mobility services.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-bmw-blue">Quick Links</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><NavLink to="/overview" className="hover:text-white transition-colors">Company Overview</NavLink></li>
          <li><NavLink to="/initiatives" className="hover:text-white transition-colors">Sustainability</NavLink></li>
          <li><NavLink to="/showcase" className="hover:text-white transition-colors">Vehicle Showcase</NavLink></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-bmw-blue">Contact</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li>Munich, Germany</li>
          <li>bmwgroup.com</li>
          <li>Sustainability Office</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30">
      <p>© 2026 BMW AG. All rights reserved.</p>
      <div className="flex space-x-8 mt-4 md:mt-0">
        <span>Legal Notice</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
    </div>
  </footer>
);

export const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16">
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-bmw-blue text-[10px] uppercase tracking-[0.4em] font-bold block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-light tracking-tight ${light ? 'text-white' : 'text-white'}`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-1 bg-bmw-blue mt-8"
    />
  </div>
);

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  key?: string | number;
}

export function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-light mb-2 text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
        {label}
      </div>
    </div>
  );
};
