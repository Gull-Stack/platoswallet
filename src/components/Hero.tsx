import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from './BlurText';

export default function Hero() {
  return (
    <section className="relative overflow-visible h-[1000px] bg-black flex flex-col items-center">
      {/* Background Video */}
      <video
        className="absolute w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
      />

      {/* Light darkening overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[300px]"
        style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] flex-1">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 mb-8">
          <span className="bg-white text-black rounded-full px-2 py-0.5 text-xs font-medium font-body">
            New
          </span>
          <span className="text-sm text-white font-body">
            Introducing AI‑powered web design.
          </span>
        </div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
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
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="text-sm font-medium font-body text-white flex items-center gap-2 hover:text-white/80 transition-colors">
            <Play className="w-4 h-4" /> Watch the Film
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
        Trusted by the teams behind
      </div>
      <div className="flex items-center gap-12 flex-wrap justify-center">
        {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((name) => (
          <span key={name} className="text-2xl md:text-3xl font-heading italic text-white">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
