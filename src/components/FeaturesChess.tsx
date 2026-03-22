export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Complete Solution
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-16">
          Everything you need to grow.
        </h2>

        {/* Row 1: text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Competitive Processing + FREE Marketing
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Industry-leading rates that match or beat your current processor. Plus website design, 
              SEO, Google Ads, and social media — all included at no extra cost.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              See pricing
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <img 
                src="/images/payment-terminal.jpg" 
                alt="Payment processing" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
            </div>
          </div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Real Partnership, Real Results
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Month-to-month agreements. Transparent reporting. Dedicated support. 
              We succeed when you succeed — that's why we invest in marketing that drives real growth.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white hover:bg-white/10 transition-colors">
              View case studies
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <img 
                src="/images/business-team.jpg" 
                alt="Business partnership" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
