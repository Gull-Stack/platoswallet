

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
      <div id="how-it-works" className="relative z-10 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Four steps to free marketing.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl">
          {[
            {n:'1', t:'Free Analysis', d:'Send us your current processing statements. We show you exactly what you save and what marketing you get.'},
            {n:'2', t:'Easy Switch', d:'Seamless transition to our platform. We handle all setup. Usually less than a week.'},
            {n:'3', t:'Marketing Begins', d:'We immediately build your website, optimize Google, and launch your campaigns.'},
            {n:'4', t:'You Grow', d:'More customers. More sales. More transactions. The flywheel spins — everyone wins.'}
          ].map(step => (
            <div key={step.n} className="liquid-glass rounded-2xl p-6 text-left">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-white font-heading italic text-lg mb-4">{step.n}</div>
              <h3 className="text-lg font-heading italic text-white mb-2">{step.t}</h3>
              <p className="text-white/60 font-body font-light text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
