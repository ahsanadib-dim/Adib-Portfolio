import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-40 px-6 bg-dark text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Personal Story</span>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9]">Beyond the<br /><span className="text-gray-600">Interface.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-xl md:text-2xl text-gray-400 space-y-8 leading-relaxed font-medium">
              <p>
                I&apos;m <span className="text-white">Ahsan Habib Adib</span> — a Software Engineering student from Bangladesh exploring the future of <span className="text-brand">digital craft</span>.
              </p>
              <p>
                My work spans across <span className="text-white">Product Engineering, Visual Branding, and Strategic Design</span>. I believe in tools that empower creativity and code that solves real-world problems.
              </p>
              <p>
                When I&apos;m not building software, I help businesses scale through high-impact design and effective digital strategies as an entrepreneur.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
             <a 
               href="https://drive.google.com/file/d/1yy59InSKuyzUnq4lbwDjgTikWFym3A-C/view?usp=sharing" 
               target="_blank"
               rel="noreferrer"
               className="bg-brand text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand/20"
             >
               Curriculum Vitae
             </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Craft', text: 'Canva, Adobe Creative Suite, and Figma for high-end visual storytelling.' },
              { title: 'Systems', text: 'C, Python, and SQL — focusing on logic, scalability, and performance.' },
              { title: 'Business', text: 'Managing AS Sourcing International alongside my academic pursuits.' },
              { title: 'Intelligence', text: 'Leveraging AI-driven workflows to accelerate product development.' }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/5 border border-white/5 rounded-[40px] hover:border-brand/40 transition-all group"
              >
                <h3 className="text-lg font-bold mb-4 text-white group-hover:text-brand transition-colors">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
