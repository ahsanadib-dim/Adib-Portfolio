import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Github, Instagram, Twitter, Linkedin, ChevronUp, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { name: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { name: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToTop();
              }
            }}
            className="flex items-center group relative"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100 group-hover:border-brand/50 transition-all duration-500 shadow-sm">
              <img 
                src="/image/logo.png" 
                alt="Adib Logo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-dark text-white font-bold text-lg">A</div>';
                }}
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-[11px] font-medium tracking-tight text-gray-500 hover:text-dark transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/ahasan-adib/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-brand transition-all"
              title="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1yy59InSKuyzUnq4lbwDjgTikWFym3A-C/view?usp=sharing" 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-dark text-white text-[11px] font-semibold rounded-full hover:bg-brand transition-all shadow-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Floating Scroll Buttons */}
      <AnimatePresence>
        {true && ( // Always show but maybe fade out if we want
          <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center shadow-xl hover:bg-brand transition-all group"
              title="Go to Top (First Page)"
            >
              <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={scrollToBottom}
              className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center shadow-xl hover:bg-brand transition-all group"
              title="Go to Bottom (Last Page)"
            >
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
