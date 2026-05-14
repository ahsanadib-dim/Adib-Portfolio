import { motion } from 'motion/react';
import { Mail, Github, Instagram, Twitter, MessageCircle, ArrowUpRight, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-dark text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-8 max-w-3xl"
          >
            <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Let's create <br /> something <span className="text-brand">remarkable.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto">
              Open for collaborations, interesting projects, or just a friendly chat about design and AI.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex flex-col gap-12 w-full max-w-4xl"
          >
            {/* Primary Contacts */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { name: 'Email', icon: Mail, href: 'mailto:ahasanadib2005@gmail.com' },
                { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/8801401894642' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 hover:bg-brand hover:border-brand hover:-translate-y-2 overflow-hidden"
                  aria-label={social.name}
                >
                  <social.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-500 mb-2" />
                  <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-white transition-colors">
                     {social.name}
                  </span>
                  <ArrowUpRight size={14} className="absolute top-4 right-4 text-white/20 group-hover:text-white transition-opacity" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ahasan-adib/' },
                { name: 'GitHub', icon: Github, href: 'https://github.com/ahsanadib-dim' },
                { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/AhasanAdib_' },
                { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ahsanadib_' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-brand/50 hover:-translate-y-1"
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
