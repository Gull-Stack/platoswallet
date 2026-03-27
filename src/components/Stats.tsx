import HLSVideo from './HLSVideo';

const stats = [
  { value: '$9K+', label: 'Annual savings for partners' },
  { value: '2.4%', label: 'Average processing rate' },
  { value: '+7%', label: 'Average revenue growth' },
  { value: '30+', label: 'Happy retail partners' },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-slate-50">
      {/* Background HLS Video - Desaturated */}
      <HLSVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] h-[100px]"
        style={{ background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0.9), transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[100px]"
        style={{ background: 'linear-gradient(to top, rgba(248, 250, 252, 0.9), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 border border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-slate-800">
                  {value}
                </div>
                <div className="text-slate-600 font-body font-medium text-sm mt-3">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
