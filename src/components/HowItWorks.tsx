import { ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative min-h-[700px] py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: 'saturate(0.3) brightness(0.6)' }}
      >
        <source src="/images/section-bg.mp4" type="video/mp4" />
      </video>

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] h-[200px]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[200px]"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Your Success Is Our Success
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          We only win when you win.
        </h2>
        <p className="text-white/60 font-body font-light text-sm max-w-lg mb-8">
          That's why we invest our processing margins into marketing that drives real results. 
          Your growth is our business model.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
          Get Your Free Analysis <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
