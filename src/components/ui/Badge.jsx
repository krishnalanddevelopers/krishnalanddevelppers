export default function Badge({ icon, label, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 w-max
                    bg-[#f5f5f5] rounded-full px-4 py-2 ${className}`}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      <span
        className="font-semibold text-[12px] font-normal leading-[16px]
                       tracking-[4px] uppercase text-current whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
}
