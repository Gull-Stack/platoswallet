const testimonials = [
  {
    quote: "I was skeptical — free marketing sounded too good to be true. But they delivered. My website looks amazing, I'm ranking on Google, and I didn't pay a dime for it.",
    name: 'Mike R.',
    role: 'Owner, Bay Area Hardware',
  },
  {
    quote: "Switching was painless. Same rates I was paying before, but now I have a professional website and Google Ads bringing in 20+ new customers a week.",
    name: 'Sarah M.',
    role: 'Owner, Downtown Boutique',
  },
  {
    quote: "They basically gave me a $50,000 marketing department for free. My competitors have no idea how I'm showing up everywhere online.",
    name: 'Jennifer L.',
    role: 'Owner, Luxe Day Spa',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 glass-ambient">
      <div className="max-w-6xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-12">
          Don't take our word for it.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }) => (
            <div key={name} className="liquid-glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300">
              <p className="text-white/80 font-body font-light text-sm italic mb-6">
                "{quote}"
              </p>
              <div>
                <div className="text-white font-body font-medium text-sm">{name}</div>
                <div className="text-white/50 font-body font-light text-xs">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
