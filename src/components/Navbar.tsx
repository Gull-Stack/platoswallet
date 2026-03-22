import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12">
      <div className="font-heading italic text-white text-2xl">
        Plato's Wallet
      </div>
      <div className="liquid-glass-strong rounded-full px-2 py-2 flex items-center gap-1">
        {['Services', 'How It Works', 'Results', 'FAQ'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/90 font-body px-4 py-2 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        <a 
          href="mailto:peter@gullstack.com?subject=Free%20Analysis%20-%20Platos%20Wallet"
          className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-colors"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="w-[120px]" />
    </nav>
  );
}
