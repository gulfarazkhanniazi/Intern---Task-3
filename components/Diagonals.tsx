export function DiagonalCorner({
  position,
  color = "blue",
  className = "",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "blue" | "teal";
  className?: string;
}) {
  const positions: Record<typeof position, string> = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0 -scale-x-100",
    "bottom-left": "left-0 bottom-0 -scale-y-100",
    "bottom-right": "right-0 bottom-0 -scale-x-100 -scale-y-100",
  };

  const fill = color === "teal" ? "#2ccab9" : "#2951d5";

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute h-24 w-24 sm:h-32 sm:w-32 ${positions[position]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M0 0 L100 0 L0 100 Z" fill={fill} />
    </svg>
  );
}
