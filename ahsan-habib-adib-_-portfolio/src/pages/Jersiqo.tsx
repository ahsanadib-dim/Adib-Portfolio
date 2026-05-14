import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Palette, Zap, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Jersiqo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation for this page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-dark hover:text-brand transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] font-semibold tracking-tight">Portfolio</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center text-white font-bold border border-brand/20 shadow-lg group-hover:scale-105 transition-transform">J</div>
            <span className="font-bold tracking-tight text-lg text-dark">JERSIQO<span className="text-brand">.</span></span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Brand Identity Design</span>
            <h1 className="font-display text-7xl md:text-[120px] font-bold tracking-tighter text-black mb-10 leading-[0.9]">
              Play<br />Bold<span className="text-brand">.</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Establishing a dynamic visual foundation for a modern sportswear movement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative rounded-[80px] overflow-hidden bg-dark border border-white/5 shadow-2xl p-12 md:p-40 group max-w-6xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 border border-white/5 rounded-[80px] m-4 md:m-8" />
            <img 
              src="/image/8.png" 
              alt="JERSIQO Logo" 
              className="relative z-10 max-w-md mx-auto drop-shadow-[0_20px_80px_rgba(255,107,0,0.4)] group-hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.src = "/image/logo.png";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 px-6 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-dark mb-10 leading-tight">The Spirit of<br />the Beautiful Game.</h2>
            <p className="text-gray-500 text-xl leading-relaxed font-medium mb-8">
              JERSIQO is designed to embody the raw energy and structured discipline of professional football.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Every curve and angle in the identity is meticulously crafted to convey motion, even in stasis. It speaks to the modern athlete—bold, determined, and creative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Momentum', icon: Zap, color: 'bg-orange-500/10 text-orange-600' },
              { title: 'Aesthetics', icon: Palette, color: 'bg-purple-500/10 text-purple-600' },
              { title: 'Unity', icon: Globe, color: 'bg-blue-500/10 text-blue-600' },
              { title: 'Focus', icon: Target, color: 'bg-green-500/10 text-green-600' }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl transition-all duration-700 group"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-dark tracking-tight">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-dark">Ecosystem.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: 'Athletic Gear', value: 'Performance Apparel', bg: 'bg-[#1d1d1f]', text: 'text-white' },
              { label: 'Lifestyle', value: 'Casual Merchandise', bg: 'bg-[#f5f5f7]', text: 'text-dark' },
              { label: 'Platform', value: 'Digital Interface', bg: 'bg-brand', text: 'text-white' }
            ].map((app) => (
              <div key={app.label} className={cn("p-16 rounded-[48px] aspect-[4/5] flex flex-col justify-end transition-all duration-700 group cursor-default", app.bg, app.text)}>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3 block">{app.label}</span>
                <h4 className="text-3xl font-bold tracking-tight leading-tight group-hover:translate-x-2 transition-transform">{app.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6 bg-dark">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-[100px] font-bold text-white mb-20 tracking-tighter leading-[0.85]">Play Bold.<br />Live <span className="text-brand">JERSIQO.</span></h2>
          <Link 
            to="/" 
            className="inline-flex items-center gap-6 bg-brand text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand/20 group"
          >
            Back to All Works
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
