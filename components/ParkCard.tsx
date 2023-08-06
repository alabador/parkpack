interface ImageProps {
  src: string;
  alt: string;
  desc: string;
}


export default function ParkCard({src, alt, desc}: ImageProps) {
  return (
    <div className="relative">
      <img
        className="rounded-sm"
        src={src}
        alt={alt}
      />
      <p className="absolute text-white">{desc}</p>
    </div>
  );
}
