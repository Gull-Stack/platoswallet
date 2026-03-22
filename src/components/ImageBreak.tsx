interface ImageBreakProps {
  src: string;
  alt: string;
}

export default function ImageBreak({ src, alt }: ImageBreakProps) {
  return (
    <div className="relative h-[250px] md:h-[350px] overflow-hidden group">
      <img src={src} alt={alt} loading="lazy"
           className="w-full h-full object-cover transition-transform duration-[8s] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
    </div>
  );
}