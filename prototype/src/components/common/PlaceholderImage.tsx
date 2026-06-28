type PlaceholderImageProps = {
  label: string;
  variant?: "space" | "program" | "archive";
  className?: string;
};

export function PlaceholderImage({
  label,
  variant = "space",
  className = ""
}: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image placeholder-${variant} ${className}`}>
      <span className="placeholder-dot" />
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
