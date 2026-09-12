export default function ProgressBar({ progress, className = "" }) {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full bg-neutral-100 h-[6px] rounded-full overflow-hidden ${className}`}>
      <div
        className="bg-[#0a0a0a] h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}
