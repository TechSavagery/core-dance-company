type Props = { width?: number; height?: number; className?: string };

export default function CloseIcon({ width = 40, height = 40, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M2 2L53 53" stroke="currentColor" strokeWidth="3" />
      <line x1="1.93543" y1="53.4393" x2="52.9354" y2="2.43934" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
