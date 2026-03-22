import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from './BlurText';

export default function Hero() {
  return (
    <section className="relative overflow-visible h-[1000px] bg-black flex flex-col items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/payment-terminal.jpg"
        src="/images/hero-bg.mp4"
      />

      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-[1]" />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-[300px]"
        style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] flex-1">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 mb-8">
          <span className="bg-white text-black rounded-full px-2 py-0.5 text-xs font-medium font-body">
            ✓
          </span>
          <span className="text-sm text-white font-body">
            Now Accepting Retail Businesses
          </span>
        </div>

        {/* Heading */}
        <BlurText
          text="Process Payments. Get FREE Marketing. Grow Your Business."
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-4xl"
          delay={100}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-white/60 font-body font-light text-lg max-w-xl"
        >
          We handle your credit card processing at competitive rates — and use the margin to fund your marketing. Custom website, SEO, Google Ads, social media... all included FREE.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
            Get Your Free Analysis <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="text-sm font-medium font-body text-white flex items-center gap-2 hover:text-white/80 transition-colors">
            <Play className="w-4 h-4" /> Learn How It Works
          </button>
        </motion.div>

        {/* Partners at bottom */}
        <div className="mt-auto pb-8 pt-16">
          <Partners />
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block">
        Trusted by retail businesses
      </div>
      <div className="flex items-center gap-12 flex-wrap justify-center">
        {['PCI DSS Compliant', 'All Major Cards', '24/7 Support', 'No Hidden Fees'].map((name) => (
          <span key={name} className="text-lg md:text-xl font-body text-white/80">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
