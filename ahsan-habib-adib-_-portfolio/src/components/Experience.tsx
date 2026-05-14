import { motion } from 'motion/react';

const experiences = [
  {
    title: "Co-Founder & Creative Lead",
    company: "S3A Sourcing International",
    period: "2025 – Present",
    desc: "Created and developed the brand identity and online presence concepts. Worked on digital designs, visual content, and branding materials. Exploring business development and online sourcing workflows."
  },
  {
    title: "Learning Journey — Web Development & UI/UX",
    company: "Personal Development",
    period: "2025 – Present",
    desc: "Learning front-end web development fundamentals and UI/UX design principles. Practicing responsive layouts, user interface structure, and modern design thinking. Exploring HTML, beginner-level development concepts, and user-centered design."
  },
  {
    title: "Productivity & Office Tools",
    company: "Academic/Professional Training",
    period: "2025",
    desc: "Learned Microsoft Office and Google Workspace tools for professional and academic productivity. Worked with documents, presentations, spreadsheets, and collaborative workflows."
  },
  {
    title: "Freelance Design Practice & Content Creation",
    company: "Self-Learning & Personal Projects",
    period: "2023 – Present",
    desc: "Designed posters, banners, thumbnails, presentation slides, and branding concepts using Canva, PicsArt, and PicsLab. Improved visual communication and layout design skills through continuous practice projects. Created social media and academic presentation materials."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-48 px-6 bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-40 text-center"
        >
          <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Career Timeline</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-black leading-tight">Growth.</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Rail */}
          <div className="absolute left-[34px] md:left-[100px] top-0 bottom-0 w-[1px] bg-gray-100">
            <motion.div 
               style={{ scaleY: 0, transformOrigin: 'top' }}
               whileInView={{ scaleY: 1 }}
               className="w-full h-full bg-brand"
               transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          
          <div className="space-y-40">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-baseline gap-12 md:gap-32"
              >
                {/* Year Label */}
                <div className="md:w-[100px] flex-shrink-0 text-left">
                  <span className="text-xl md:text-2xl font-bold text-brand tracking-tighter block">
                    {exp.period.split(' – ')[0]}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[29px] md:left-[96px] top-[14px] z-10">
                  <div className="w-3 h-3 rounded-full bg-white border border-brand shadow-sm" />
                </div>

                {/* Content */}
                <div className="flex-grow group">
                  <div className="max-w-2xl">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6 leading-tight group-hover:text-brand transition-colors duration-500">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{exp.company}</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-100" />
                       <span className="text-[12px] font-bold text-gray-300">{exp.period}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
