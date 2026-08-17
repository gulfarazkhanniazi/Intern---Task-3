import Image from "next/image";
import { ImageIcon, type LucideIcon } from "lucide-react";

const GRADIENTS = [
  "from-navy-800 via-navy-700 to-navy-900",
  "from-navy-900 via-navy-800 to-accent-blue/30",
  "from-accent-teal/20 via-navy-800 to-navy-950",
  "from-navy-700 via-navy-900 to-navy-950",
];

export default function Placeholder({
  label,
  src,
  icon: Icon = ImageIcon,
  variant = 0,
  className = "",
  aspect = "aspect-4/3",
  priority = false,
}: {
  label: string;
  src?: string;
  icon?: LucideIcon;
  variant?: number;
  className?: string;
  aspect?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-surface ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  const gradient = GRADIENTS[variant % GRADIENTS.length];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <Icon className="h-9 w-9 text-white/70" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
          {label}
        </span>
      </div>
    </div>
  );
}
