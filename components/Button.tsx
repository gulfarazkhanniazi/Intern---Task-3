import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "solid" | "outline-light";
  size?: "md" | "lg";
  icon?: LucideIcon | false;
  className?: string;
};

const variants = {
  outline:
    "border-2 border-accent-blue bg-transparent text-accent-blue hover:bg-accent-blue hover:text-white",
  "outline-light":
    "border-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy",
  solid: "border-2 border-accent-blue bg-accent-blue text-white hover:bg-accent-dark hover:border-accent-dark",
};

const sizes = {
  md: "px-6 py-2.5 text-xs",
  lg: "px-7 py-3.5 text-sm",
};

export default function Button({
  href,
  children,
  variant = "outline",
  size = "md",
  icon = ArrowRight,
  className = "",
}: ButtonProps) {
  const Icon = icon;
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-bold uppercase tracking-wider transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {Icon && (
        <Icon
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
