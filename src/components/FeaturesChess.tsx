export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-16">
          Pro features. Zero complexity.
        </h2>

        {/* Row 1: text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Every pixel is intentional. Our AI studies what works across thousands of top
              sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20" />
            </div>
          </div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Your site evolves on its own. AI monitors every click, scroll, and
              conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              See how it works
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
