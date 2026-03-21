import { ArrowUpRight } from 'lucide-react';
import HLSVideo from './HLSVideo';

export default function HowItWorks() {
  return (
    <section className="relative min-h-[700px] py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background HLS Video */}
      <HLSVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

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
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm max-w-lg mb-8">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch.
          All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
          Get Started <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
