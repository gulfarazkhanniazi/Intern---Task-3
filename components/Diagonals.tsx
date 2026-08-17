export function DiagonalCorner({
  position,
  color = "blue",
  className = "",
  visibleFrom,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "blue" | "teal";
  className?: string;
  /** Breakpoint at which the shape starts showing. Omit to show on all screens
   * (use this for small accents anchored to an image/card). Set this for large
   * background flourishes that need room to avoid overlapping text. */
  visibleFrom?: "md" | "lg" | "xl";
}) {
  const positions: Record<typeof position, string> = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0 -scale-x-100",
    "bottom-left": "left-0 bottom-0 -scale-y-100",
    "bottom-right": "right-0 bottom-0 -scale-x-100 -scale-y-100",
  };

  const visibility: Record<NonNullable<typeof visibleFrom>, string> = {
    md: "hidden md:block",
    lg: "hidden lg:block",
    xl: "hidden xl:block",
  };

  const fill = color === "teal" ? "#475569" : "#2951d5";

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute h-24 w-24 sm:h-32 sm:w-32 ${
        visibleFrom ? visibility[visibleFrom] : ""
      } ${positions[position]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M0 0 L100 0 L0 100 Z" fill={fill} />
    </svg>
  );
}
