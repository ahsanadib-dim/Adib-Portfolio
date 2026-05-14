import { Star } from 'lucide-react';

const items = [
  'Canva Design', 'Web Development', 'Python', 'UI / UX', 'After Effects',
  'Figma', 'Branding', 'AI Development', 'Video Editing', 'Presentation Design'
];

export default function Marquee() {
  return (
    <div className="py-6 bg-dark overflow-hidden border-y border-white/5">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8 text-white/40 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
            <Star size={10} className="text-brand fill-brand" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
