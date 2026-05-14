import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: "AS Sourcing International",
    description: "Built the complete digital presence for a garment buying house business — including an AI-powered website and company profile.",
    tools: ["Website", "Branding"],
    link: "https://ahasanadib2005.wixstudio.com/s-3a",
    color: "bg-brand text-white",
    featured: true
  },
  {
    title: "S3A Sourcing",
    description: "Built the complete digital presence for a garment buying house business — including an AI-powered website and company profile.",
    tools: ["AI Website", "Company Profile"],
    link: "/pdf/S3A_SOURCING_COMPANY_PROFILE.pdf",
    color: "bg-brand/10 text-brand"
  },
  {
    title: "Hotel Reservation System",
    description: "A comprehensive hotel management and reservation system built with modern technologies for seamless booking experiences.",
    tools: ["Java", "Frontend", "Database"],
    link: "https://github.com/ahsanadib-dim/Hotel-Reservation-System",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Digital Content Design",
    description: "Creative Canva designer specializing in modern social media posts, thumbnails, posters, and professional presentation slides.",
    tools: ["Canva", "Presentation", "Social Media", "Layout"],
    link: "/digital-content",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Design Website for Pizzarello",
    description: "Created a simple restaurant portfolio webpage to practice front-end fundamentals.",
    tools: ["Web Design", "Vercel"],
    link: "https://pizzarello.vercel.app/",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Video Editing",
    description: "Created video content for digital platforms including YouTube and Instagram.",
    tools: ["Capcut", "Premiere Pro"],
    link: "https://www.youtube.com/@Dim-528",
    color: "bg-red-500/10 text-red-600"
  },
  {
    title: "JERSIQO Brand Identity",
    description: "Designed logo concepts and branding ideas for a modern sportswear brand.",
    tools: ["Canva", "Logo Design"],
    link: "/jersiqo",
    color: "bg-green-500/10 text-green-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Selected Projects</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black">Case Studies.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">
            A portfolio of digital solutions and creative brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, index) => {
            const isInternal = project.link.startsWith('/');
            const MotionLink = motion(Link);
            const Component = isInternal ? MotionLink : motion.a;
            
            return (
              <Component
                key={index}
                {...(isInternal ? { to: project.link } : { href: project.link, target: "_blank", rel: "noreferrer" })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative p-12 md:p-16 rounded-[64px] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[450px]",
                  "bg-black text-white border-2 border-transparent hover:border-brand/40 hover:shadow-[0_40px_100px_rgba(255,107,0,0.1)]",
                  project.featured && "md:col-span-2"
                )}
              >
              <div className="absolute top-0 right-0 p-12 translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm",
                  "bg-white group-hover:bg-brand text-brand group-hover:text-white"
                )}>
                  <ArrowUpRight size={24} strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all",
                      "bg-white/5 border-white/10 text-white/40 group-hover:text-white group-hover:border-white/20"
                    )}>
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className={cn("max-w-xl", project.featured && "max-w-2xl")}>
                  <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-[1.1]">
                    {project.title}
                  </h3>
                  <p className={cn(
                    "text-lg md:text-xl leading-relaxed font-medium transition-colors",
                    "text-gray-400 group-hover:text-white"
                  )}>
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-2 overflow-hidden">
                <span className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] transition-all",
                  "text-brand"
                )}>
                  Discovery
                </span>
                <div className={cn(
                  "h-[1px] w-12 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100",
                  "bg-brand"
                )} />
              </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
