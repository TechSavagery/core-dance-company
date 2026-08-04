type Props = { width?: number; height?: number; className?: string };

export default function MenuIcon({ width = 40, height = 23, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <line x1="1.5" y1="1.5" x2="38.5" y2="1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="1.5" y1="11.5" x2="38.5" y2="11.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="21.5" y1="21.5" x2="38.5" y2="21.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
