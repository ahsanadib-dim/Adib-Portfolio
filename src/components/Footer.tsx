export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
        <p>
          © {currentYear} Ahsan Habib Adib
        </p>
        
        <div className="flex items-center space-x-8">
          <span>Designer + Developer</span>
          <div className="w-1 h-1 rounded-full bg-brand" />
          <span>Bangladesh 🇧🇩</span>
        </div>
      </div>
    </footer>
  );
}
