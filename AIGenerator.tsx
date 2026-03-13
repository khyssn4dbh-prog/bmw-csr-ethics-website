import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, X, Download } from 'lucide-react';

interface AIGeneratorButtonProps {
  vehicleName: string;
  description: string;
  className?: string;
  style?: 'studio' | 'architectural';
}

export const AIGeneratorButton: React.FC<AIGeneratorButtonProps> = ({ vehicleName, description, className = "", style = "studio" }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let prompt = "";
      if (style === 'architectural') {
        prompt = `A photorealistic architectural visualization of a ${vehicleName}. ${description}. The vehicle is parked in a futuristic sustainable city with integrated vertical farms and solar panel roofs. The environment is lush, green, and technologically advanced. High-end architectural photography style, 8k resolution, cinematic lighting, masterpiece.`;
      } else {
        prompt = `A highly accurate, photorealistic, professional studio photography of a ${vehicleName}. ${description}. The lighting should be dramatic and high-end, highlighting the sleek lines and premium details of the car. 8k resolution, cinematic quality, masterpiece.`;
      }
      
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
        setGeneratedImage(imageUrl);
      } else {
        setError("Failed to generate image. Please try again.");
      }
    } catch (err) {
      console.error("Generation failed:", err);
      setError("An error occurred during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button 
        onClick={handleGenerate}
        disabled={isGenerating}
        className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all bg-white/5 text-white/70 hover:bg-bmw-blue hover:text-white border border-white/10 ${className} ${isGenerating ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {isGenerating ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>Generating AI Render...</span>
          </>
        ) : (
          <>
            <Sparkles size={14} />
            <span>Generate AI Render</span>
          </>
        )}
      </button>

      <AnimatePresence>
        {generatedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
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
                    src={generatedImage} 
                    alt={`AI Generated ${vehicleName}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <span className="text-bmw-blue text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">AI Generated Render</span>
                  <h3 className="text-4xl font-light mb-6">The Future of <span className="font-bold">{vehicleName}</span></h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {style === 'architectural' 
                      ? `This photorealistic architectural visualization showcases the ${vehicleName} in a futuristic sustainable city with integrated vertical farms and solar panel roofs.`
                      : `This AI-generated visualization showcases the ${vehicleName} with extreme accuracy and cinematic lighting.`}
                    It represents the pinnacle of digital automotive artistry.
                  </p>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = generatedImage;
                      link.download = `BMW-${vehicleName}-AI-Render.png`;
                      link.click();
                    }}
                    className="bg-bmw-blue text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-bmw-blue/80 transition-all self-start flex items-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download Render</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="fixed bottom-10 right-10 z-[200] glass p-4 rounded-xl border-red-500/50 text-red-500 text-xs font-bold animate-bounce">
          {error}
        </div>
      )}
    </>
  );
};
