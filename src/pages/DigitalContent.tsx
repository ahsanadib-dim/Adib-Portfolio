import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const works = [
  {
    id: 1,
    title: "Daily Pizza Delight",
    category: "Restaurant Promo",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    description: "Catchy social media advertisement promoting a 30% discount on all pizzas."
  },
  {
    id: 2,
    title: "Fitness Fusion Podcast",
    category: "YouTube Thumbnail",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    description: "High-energy podcast thumbnail designed to boost CTR and engagement."
  },
  {
    id: 3,
    title: "The Ultimate Burger Combo",
    category: "Fast Food Ad",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop",
    description: "Mouth-watering burger combo promotion for a gourmet fast-food chain."
  },
  {
    id: 4,
    title: "Inside the Ostad Platform",
    category: "Presentation Slide",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    description: "Minimalist and modern presentation slide focusing on empowering real-time learning."
  },
  {
    id: 5,
    title: "Global Innovate Tech Summit",
    category: "Event Poster",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    description: "Futuristic banner design for a global technology conference."
  },
  {
    id: 6,
    title: "Eid Sale - Everything!",
    category: "E-commerce Banner",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1887&auto=format&fit=crop",
    description: "Festive retail banner for major seasonal sales events."
  },
  {
    id: 7,
    title: "Fashion Offer - Store-Wide",
    category: "Retail Ad",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    description: "Clean fashion promotion focusing on apparel and shopping experience."
  },
  {
    id: 8,
    title: "AS Sourcing International",
    category: "Company Profile",
    image: "/image/8.png",
    description: "Comprehensive company profile branding for a global apparel sourcing house."
  },
  {
    id: 9,
    title: "Master Your Fitness",
    category: "Gym Promo",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    description: "Motivational flyer designed to inspire gym sign-ups and lifestyle changes."
  },
  {
    id: 10,
    title: "Special Membership Offer",
    category: "Service Promo",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    description: "Conversion-focused advertisement for club memberships and special offers."
  },
  {
    id: 11,
    title: "S3A Sourcing",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    description: "Corporate identity and aesthetic branding for textile industries."
  },
  {
    id: 12,
    title: "Flash Sale - Unleash Deals",
    category: "Commercial Ad",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    description: "Urgency-driven banner for time-limited digital commerce deals."
  }
];

export default function DigitalContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-dark hover:text-brand transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] font-semibold tracking-tight">Portfolio</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center text-white font-bold border border-brand/20 shadow-lg group-hover:scale-105 transition-transform">D</div>
            <span className="font-bold tracking-tight text-lg">Digital <span className="text-brand">Content.</span></span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Creative Works</span>
            <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-dark mb-10 leading-[0.9]">
              Visual<br />Experience<span className="text-brand">.</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Crafting high-impact digital assets that capture attention and drive engagement across all platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
            {works.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid mb-10"
              >
                <div className="group relative bg-black rounded-[48px] overflow-hidden border border-gray-100 hover:border-brand/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(255,107,0,0.2)]">
                  <div className="aspect-auto">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-auto object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-4 block">
                        {work.category}
                      </span>
                      <h3 className="text-white font-display text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-4">
                        {work.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                        {work.description}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg">
                          <ArrowUpRight size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-dark mb-12">Expertise &<br />Services.</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Social Media Posts", desc: "Eye-catching designs for Instagram, Facebook, and LinkedIn." },
                  { title: "Presentation Design", desc: "Professional slides for business pitches and educational talks." },
                  { title: "YouTube Assets", desc: "High-CTR thumbnails and channel branding that stands out." },
                  { title: "Digital Posters", desc: "Impactful visuals for events and marketing campaigns." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all group">
                    <div className="w-3 h-3 bg-brand rounded-full mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-bold text-dark mb-2 text-lg tracking-tight">{s.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-dark rounded-[64px] overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                   <Instagram className="w-20 h-20 text-white mb-8" strokeWidth={1} />
                   <h3 className="text-white text-4xl font-bold mb-6 tracking-tight">Join the Craft.</h3>
                   <p className="text-white/60 mb-10 max-w-sm text-lg leading-relaxed">Daily design updates and creative process insights on my Instagram.</p>
                   <a href="#" className="bg-white text-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 hover:scale-105 transition-all">
                     Instagram <ExternalLink size={16} />
                   </a>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-tighter">Let's create something<br /><span className="text-brand">remarkable.</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-4 bg-brand text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand/20 group"
            >
              Start Conversation
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
