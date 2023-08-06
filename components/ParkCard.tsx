interface ImageProps {
  src: string;
  alt: string;
  desc: string;
}


export default function ParkCard({src, alt, desc}: ImageProps) {
  return (
    <div className="relative h-80">
      <img
        className="rounded-sm w-full h-full"
        src={src}
        alt={alt}
      />
      <p className="absolute bottom-6 right-4 text-white break-words">{desc}</p>
    </div>
  );
}
