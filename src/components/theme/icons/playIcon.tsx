type Props = { width?: number | string; height?: number | string };

export default function PlayIcon({ width = 30, height = 36 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M0.500004 1.54552L29 18L0.500002 34.4545L0.500004 1.54552Z" stroke="currentColor" />
    </svg>
  );
}
