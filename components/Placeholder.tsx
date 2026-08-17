import Image from "next/image";

function seedFrom(label: string, variant: number) {
  return `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${variant}`;
}

export default function Placeholder({
  label,
  variant = 0,
  className = "",
  aspect = "aspect-4/3",
}: {
  label: string;
  variant?: number;
  className?: string;
  aspect?: string;
}) {
  const seed = seedFrom(label, variant);

  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-surface ${className}`}
    >
      <Image
        src={`https://picsum.photos/seed/${seed}/1200/900`}
        alt={`${label} — placeholder photo, replace with real photography`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
