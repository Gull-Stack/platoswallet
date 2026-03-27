import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Services', 'How It Works', 'Results', 'FAQ'];
  
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-5xl flex items-center justify-between px-4 py-3 liquid-glass rounded-full">
        <div className="font-heading italic text-slate-800 text-xl md:text-2xl">
          Plato's Wallet
        </div>
        
        {/* Desktop nav */}
        <div className="liquid-glass rounded-full px-4 py-2 hidden md:flex items-center gap-6">
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
               className="text-sm font-medium text-slate-600 font-body hover:text-slate-800 transition-colors">
              {item}
            </a>
          ))}
        </div>
        
        <a href="mailto:peter@gullstack.com?subject=Free%20Analysis%20-%20Platos%20Wallet"
           className="bg-slate-800 text-white rounded-full px-4 py-2 text-sm font-medium font-body hidden md:flex items-center gap-1 hover:bg-slate-700 transition-colors">
          Get Started <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        
        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
             onClick={() => setOpen(false)}>
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
               className="text-3xl font-heading italic text-slate-800 hover:text-slate-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="mailto:peter@gullstack.com?subject=Free%20Analysis%20-%20Platos%20Wallet"
             className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium font-body text-white mt-4">
            Get Started
          </a>
        </div>
      )}
    </>
  );
}
