interface ImageBreakProps {
  src: string;
  alt: string;
  text?: string;
}

export default function ImageBreak({ src, alt, text }: ImageBreakProps) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-[8s] ease-out hover:scale-105"
        style={{ filter: 'grayscale(40%) brightness(0.8)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      {text && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-white/90 font-heading italic text-2xl md:text-3xl text-center px-6">
            {text}
          </p>
        </div>
      )}
    </section>
  );
}