type Props = { width?: number | string; height?: number | string };

export default function RightArrow({ width = 35, height = 22 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0.585815L34.4142 10.9999L24 21.4142L22.5858 20L30.5857 12L0 12L2.38419e-07 10L30.5858 10L22.5858 2.00003L24 0.585815Z"
      />
    </svg>
  );
}
