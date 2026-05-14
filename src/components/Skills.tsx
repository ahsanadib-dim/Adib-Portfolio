import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: "Design Mastery",
    skills: [
      { name: "Canva", color: "#00C4CC", slug: "canva", localPath: "/canva.png" },
      { name: "Figma", color: "#F24E1E", slug: "figma", localPath: "/figma.png" },
      { name: "Photoshop", color: "#31A8FF", slug: "adobephotoshop", localPath: "/photoshop.png" },
      { name: "Illustrator", color: "#FF9A00", slug: "adobeillustrator", localPath: "/adobe illustrator.jpg" },
      { name: "PixleArt", color: "#B13EFB", slug: "picsart", localPath: "/pixleart.jpg" },
      { name: "Pixellab", color: "#3498DB", slug: "pixellab", localPath: "/pxellab.jfif" }
    ]
  },
  {
    title: "Development",
    skills: [
      { name: "C", color: "#A8B9CC", slug: "c", localPath: "/C_Programming_Language.svg.png" },
      { name: "C++", color: "#00599C", slug: "cplusplus", localPath: "/c++.png" },
      { name: "HTML5", color: "#E34F26", slug: "html5" },
      { name: "JS", color: "#F7DF1E", slug: "javascript" },
      { name: "React", color: "#61DAFB", slug: "react" },
      { name: "Tailwind", color: "#06B6D4", slug: "tailwindcss" },
      { name: "Node.js", color: "#339933", slug: "nodedotjs" },
      { name: "Python", color: "#3776AB", slug: "python" },
      { name: "MySQL", color: "#4479A1", slug: "mysql" },
      { name: "Firebase", color: "#FFCA28", slug: "firebase" },
      { name: "AI", color: "#FF6B00", slug: "openai", localPath: "/ai.png" },
      { name: "GitHub", color: "#181717", slug: "github" },
      { name: "Vercel", color: "#000000", slug: "vercel" },
      { name: "VS Code", color: "#007ACC", slug: "visualstudiocode", localPath: "/vs code.jfif" },
      { name: "Linux", color: "#FCC624", slug: "linux" }
    ]
  },
  {
    title: "Multimedia",
    skills: [
      { name: "Premiere Pro", color: "#EA77FF", slug: "adobepremierepro", localPath: "/download (2).png" },
      { name: "After Effects", color: "#CF96FD", slug: "adobeaftereffects", localPath: "/adobe aftereffects .png" },
      { name: "Capcut", color: "#000000", slug: "capcut", localPath: "/capcut .jfif" }
    ]
  },
  {
    title: "Productivity",
    skills: [
      { name: "Office", color: "#D83B01", slug: "microsoftoffice", localPath: "/ms ofice.jfif" },
      { name: "Google", color: "#4285F4", slug: "google", localPath: "/google.png" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-6 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-32 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-black">Technical <span className="text-brand">Toolbox.</span></h2>
        </motion.div>

        <div className="space-y-32">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-12 text-center">{category.title}</h3>
               <div className={cn(
                 "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8",
                 category.skills.length < 4 ? "max-w-2xl mx-auto flex flex-wrap justify-center" : ""
               )}>
                {category.skills.map((skill: any, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className={cn(
                      "group",
                      category.skills.length < 4 ? "w-24 md:w-32" : ""
                    )}
                  >
                    <div className="aspect-square flex items-center justify-center group-hover:-translate-y-1 transition-all duration-500">
                      <img 
                        src={skill.localPath || `https://cdn.simpleicons.org/${skill.slug}`}
                        alt={skill.name}
                        className="w-full h-auto max-h-[35%] object-contain transition-all duration-500 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          if (skill.localPath) {
                            e.currentTarget.src = `https://cdn.simpleicons.org/${skill.slug}`;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-[9px] font-bold text-gray-400 group-hover:text-brand transition-colors uppercase tracking-wider">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

