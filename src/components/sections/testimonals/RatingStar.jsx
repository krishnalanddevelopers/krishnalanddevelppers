export default function RatingStar({ filled = true }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 11"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6 0L7.545 3.555L11.41 3.97L8.505 6.475L9.325 10.3L6 8.24L2.675 10.3L3.495 6.475L0.59 3.97L4.455 3.555L6 0Z"
        fill={filled ? "#171717" : "#e5e5e5"}
      />
    </svg>
  );
}
