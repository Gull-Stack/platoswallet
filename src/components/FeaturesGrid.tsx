import { CreditCard, Globe, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Competitive Processing',
    description: '2.4% average rate. Same-day deposits. No hidden fees.',
  },
  {
    icon: Globe,
    title: 'Complete Marketing',
    description: 'Website, SEO, Google Ads, social media — all included FREE.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Our partners see average 30%+ growth in customer traffic.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'Month-to-month. Transparent reporting. We succeed when you do.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 glass-ambient relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(125, 211, 252, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(165, 180, 252, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(212, 168, 83, 0.03) 0%, transparent 50%)
          `,
          animation: 'gradientShift 20s ease-in-out infinite'
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Why Choose Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-12">
          The advantage is clear.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="liquid-glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-heading italic text-white mb-2">{title}</h3>
              <p className="text-white/60 font-body font-light text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
