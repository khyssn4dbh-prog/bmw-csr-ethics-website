import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { SectionHeading } from '../components/Layout';
import { VEHICLES, Vehicle } from '../constants';
import { AIGeneratorButton } from '../components/AIGenerator';
import { ChevronLeft, ChevronRight, Upload, X, Camera, Image as ImageIcon, Sparkles, Loader2, Info, Zap, Gauge, Timer } from 'lucide-react';

interface UserImage {
  id: string;
  url: string;
  name: string;
  date: string;
}

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [userImages, setUserImages] = useState<UserImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<{ url: string, name: string } | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Luxury Sedan', 'Performance', 'Electric'];

  const filteredVehicles = activeCategory === 'All' 
    ? VEHICLES 
    : VEHICLES.filter(v => v.category === activeCategory);

  const handleGenerateRender = async (vehicleName: string, category: string, vehicleId: string) => {
    setIsGenerating(vehicleId);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `A photorealistic architectural visualization of a ${vehicleName} (${category}). The vehicle is parked in a futuristic sustainable city with integrated vertical farms and solar panel roofs. The environment is lush, green, and technologically advanced. High-end architectural photography style, 8k resolution, cinematic lighting, masterpiece.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ text: prompt }],
      });

      let imageUrl = '';
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (imageUrl) {
        setGeneratedImage({ url: imageUrl, name: vehicleName });
      }
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setIsGenerating(null);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    // Simulate a brief upload delay for better UX
    setTimeout(() => {
      const newImages: UserImage[] = Array.from(files).map((file: File) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        name: file.name,
        date: new Date().toLocaleDateString()
      }));

      setUserImages(prev => [...newImages, ...prev]);
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1000);
  };

  const removeImage = (id: string) => {
    const imgToRemove = userImages.find(img => img.id === id);
    if (imgToRemove) {
      URL.revokeObjectURL(imgToRemove.url);
    }
    setUserImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/bmw-showcase-hero/1920/1080" 
            alt="Showcase" 
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
            Vehicle <span className="font-bold text-bmw-blue">Showcase</span>
          </motion.h1>
          <div className="mt-8">
            <AIGeneratorButton vehicleName="BMW M4" description="Performance coupe in a scenic coastal road" style="architectural" />
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold border transition-all ${
                activeCategory === cat 
                  ? 'bg-bmw-blue border-bmw-blue text-white' 
                  : 'border-white/20 text-white/50 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-2xl overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-bmw-blue">{vehicle.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{vehicle.description}</p>
                    <div className="flex flex-col space-y-4">
                      <button 
                        onClick={() => setSelectedVehicle(vehicle)}
                        className="text-xs uppercase tracking-widest font-bold text-bmw-blue flex items-center group-hover:translate-x-2 transition-transform"
                      >
                        View Details <ChevronRight size={14} className="ml-1" />
                      </button>
                      <button 
                        onClick={() => handleGenerateRender(vehicle.name, vehicle.category, vehicle.id)}
                        disabled={isGenerating !== null}
                        className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all ${
                          isGenerating === vehicle.id
                            ? 'bg-white/10 text-white/30 cursor-not-allowed'
                            : 'bg-white/5 text-white/70 hover:bg-bmw-blue hover:text-white border border-white/10'
                        }`}
                      >
                        {isGenerating === vehicle.id ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Generating...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={14} />
                            <span>Architectural Render</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Vehicle Details Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-5xl w-full rounded-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-red-500/50 transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[300px] lg:h-full">
                  <img 
                    src={selectedVehicle.image} 
                    alt={selectedVehicle.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-16">
                  <span className="text-bmw-blue text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{selectedVehicle.category}</span>
                  <h3 className="text-5xl font-light mb-8">{selectedVehicle.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {selectedVehicle.specs.range && (
                      <div className="flex items-center space-x-4">
                        <div className="bg-bmw-blue/10 p-3 rounded-xl">
                          <Zap className="text-bmw-blue" size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Range</p>
                          <p className="text-lg font-medium">{selectedVehicle.specs.range}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-4">
                      <div className="bg-bmw-blue/10 p-3 rounded-xl">
                        <Gauge className="text-bmw-blue" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Power</p>
                        <p className="text-lg font-medium">{selectedVehicle.specs.power}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-bmw-blue/10 p-3 rounded-xl">
                        <Timer className="text-bmw-blue" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">0-60 mph</p>
                        <p className="text-lg font-medium">{selectedVehicle.specs.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-bmw-blue/10 p-3 rounded-xl">
                        <Info className="text-bmw-blue" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Top Speed</p>
                        <p className="text-lg font-medium">{selectedVehicle.specs.topSpeed}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-bmw-blue mb-6">Key Highlights</h4>
                    <ul className="space-y-4">
                      {selectedVehicle.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue mt-1.5 shrink-0" />
                          <span className="text-white/60 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => setSelectedVehicle(null)}
                    className="w-full bg-bmw-blue text-white py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-bmw-blue/80 transition-all"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Image Modal */}
      <AnimatePresence>
        {generatedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-4xl w-full rounded-3xl overflow-hidden relative"
            >
              <button 
                onClick={() => setGeneratedImage(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-red-500/50 transition-all"
              >
                <X size={20} />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto h-full min-h-[400px]">
                  <img 
                    src={generatedImage.url} 
                    alt={generatedImage.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <span className="text-bmw-blue text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">AI Generated Render</span>
                  <h3 className="text-4xl font-light mb-6">The Future of <span className="font-bold">{generatedImage.name}</span></h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    This photorealistic architectural visualization showcases the {generatedImage.name} in a futuristic sustainable city with integrated vertical farms and solar panel roofs. 
                    It represents our vision of blending high-performance luxury with environmental harmony.
                  </p>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = generatedImage.url;
                      link.download = `BMW-${generatedImage.name}-Render.png`;
                      link.click();
                    }}
                    className="bg-bmw-blue text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-bmw-blue/80 transition-all self-start"
                  >
                    Download Render
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Community Upload Section */}
      <section className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex-grow">
              <SectionHeading title="Community Gallery" subtitle="Share Your BMW Story" />
              <p className="text-white/50 max-w-2xl">
                Join our global community by sharing photos of your BMW or your local sustainability initiatives. 
                Help us showcase the impact of responsible mobility around the world.
              </p>
            </div>
            <div className="shrink-0">
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                multiple
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  isUploading 
                    ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                    : 'bg-bmw-blue text-white hover:bg-bmw-blue/80 shadow-lg shadow-bmw-blue/20'
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    <span>Upload Photo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {userImages.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-2 border-dashed border-white/10 rounded-3xl py-32 flex flex-col items-center justify-center text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Camera size={32} className="text-white/20" />
              </div>
              <h4 className="text-xl font-light text-white/40 mb-2">No community photos yet</h4>
              <p className="text-white/20 text-sm max-w-xs">Be the first to share your experience with the BMW community.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {userImages.map((img) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative aspect-square rounded-2xl overflow-hidden group bg-bmw-dark"
                  >
                    <img 
                      src={img.url} 
                      alt={img.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white truncate mb-1">{img.name}</p>
                      <p className="text-[8px] uppercase tracking-widest text-white/50">{img.date}</p>
                    </div>
                    <button 
                      onClick={() => removeImage(img.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full glass-dark flex items-center justify-center text-white/70 hover:text-white hover:bg-red-500/50 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-32 px-6 bg-bmw-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="The Electric Lineup" subtitle="Innovation in Motion" />
          <div className="relative h-[600px] rounded-3xl overflow-hidden group">
             <img 
              src="https://picsum.photos/seed/bmw-i7-showcase-carousel/1920/1080" 
              alt="BMW i7 Luxury Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 max-w-xl">
              <h3 className="text-4xl font-light mb-4">Uncompromising Luxury</h3>
              <p className="text-white/60 mb-6">Experience the next level of automotive excellence with the all-electric BMW i7.</p>
              <AIGeneratorButton vehicleName="BMW i7" description="Luxury electric sedan in a high-end urban environment" style="architectural" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-bmw-blue transition-colors">
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-bmw-blue transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
