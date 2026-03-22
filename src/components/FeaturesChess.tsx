export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Complete Marketing Suite
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-16">
          $5,000+ in marketing. Included free.
        </h2>

        {/* Row 1: text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Custom Website — Built For You
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              A stunning, conversion-optimized website unique to your brand. Mobile-first, lightning fast, SEO-ready. Worth $3,000+.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              See Examples
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 flex items-center justify-center">
                <div className="text-white/40 text-2xl font-heading italic">Website Preview</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              SEO + Google Ads + Social Media
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Local SEO, Google Business optimization, professional ad campaigns, social media management. We handle it all so you can focus on your business.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              Full Service List
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <div className="w-full h-full bg-gradient-to-br from-green-500/20 via-teal-500/10 to-blue-500/20 flex items-center justify-center">
                <div className="text-white/40 text-2xl font-heading italic">Marketing Suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
