import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12">
      <div className="font-heading italic text-white text-2xl">
        PlatosWallet
      </div>
      <div className="liquid-glass-strong rounded-full px-2 py-2 flex items-center gap-1">
        {['Home', 'Services', 'Work', 'Process', 'Pricing'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/90 font-body px-4 py-2 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-colors">
          Get Started <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div className="w-[120px]" />
    </nav>
  );
}
