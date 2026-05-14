import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[-100px] -right-20 w-[520px] h-[520px] bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[50px] -left-20 w-[300px] h-[300px] bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-pale border border-brand/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Available for Projects</span>
            </div>
            
            <h1 className="font-display text-7xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter mb-8 text-black">
              Ahsan<br />
              Habib<br />
              <span className="text-brand">Adib.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-lg leading-relaxed mb-12 font-medium">
              Software Engineering Student <span className="text-dark">at DIU</span>. 
              Specializing in <span className="text-brand">Digital Design</span> & Modern Web Interfaces.
            </p>

             <div className="flex flex-wrap gap-6">
               <a 
                 href="#projects"
                 className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-xl"
               >
                 <span>View Selected Works</span>
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </a>
               <a 
                 href="#contact"
                 className="flex items-center gap-4 bg-white border border-gray-200 text-dark px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all duration-500"
               >
                 Get in touch
               </a>
             </div>

            <div className="flex gap-12 mt-20">
              {[
                { label: 'Innovations', value: '04' },
                { label: 'Creative Suite', value: '10' },
                { label: 'AI Learning', value: '∞' }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="font-display text-4xl font-bold mb-2 text-dark group-hover:text-brand transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:flex justify-center"
        >
          <div className="relative">
             <div className="w-[450px] h-[450px] rounded-full bg-gray-50 flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 border border-gray-100 rounded-full" />
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                  <img 
                    src="/image/adib image.jpg" 
                    alt="Ahsan Adib" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
             </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-6 bg-white/80 backdrop-blur-xl px-10 py-6 rounded-[32px] shadow-2xl shadow-black/5 border border-white/50 z-20"
            >
              <div className="font-display font-bold text-2xl text-dark">Designer</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 -left-6 bg-white/80 backdrop-blur-xl px-10 py-6 rounded-[32px] shadow-2xl shadow-black/5 border border-white/50 z-20"
            >
              <div className="font-display font-bold text-2xl text-dark">Developer</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
