interface PulseDividerProps {
  variant?: "top" | "bottom";
  color?: "emerald" | "sky" | "slate";
}

export default function PulseDivider({
  variant = "top",
  color = "emerald",
}: PulseDividerProps) {
  const colors = {
    emerald: "#0f766e",
    sky: "#0ea5e9",
    slate: "#94a3b8",
  };

  const stroke = colors[color];
  const position = variant === "top" ? "top-0" : "bottom-0";

  return (
    <div className={`absolute left-0 right-0 ${position} pointer-events-none`}>
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60h120l30-12 30 24 30-36 30 48 30-24h160l30 12 30-24 30 36 30-48 30 24h200"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ekg-line opacity-40"
          style={{ color: stroke }}
        />
      </svg>
    </div>
  );
}
