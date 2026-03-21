import HLSVideo from './HLSVideo';

export default function CTAFooter() {
  return (
    <>
      <section className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background HLS Video */}
        <HLSVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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
        <div className="relative z-10 flex flex-col items-center text-center py-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
            Your next website starts here.
          </h2>
          <p className="text-white/60 font-body font-light text-sm max-w-md mb-8">
            Book a free strategy call. See what AI‑powered design can do.
          </p>
          <div className="flex items-center gap-4">
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              Book a Call
            </button>
            <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body hover:bg-white/90 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-white/10 px-6 pb-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-white/40 text-xs font-body">
            &copy; 2026 PlatosWallet
          </span>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
