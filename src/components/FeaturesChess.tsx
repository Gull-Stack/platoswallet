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
          <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
            <img src="/images/payment-terminal.jpg" alt="Payment processing" className="w-full h-full object-cover aspect-video" loading="lazy" />
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
          <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
            <img src="/images/analytics.jpg" alt="Marketing analytics" className="w-full h-full object-cover aspect-video" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
