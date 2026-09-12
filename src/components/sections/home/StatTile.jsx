export default function StatTile({ value, label }) {
  return (
    <div
      className="flex flex-col gap-1 flex-1 min-w-0
                    rounded-[16px] border border-white/10 bg-white/5 p-4
                    transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    >
      <span className="font-sans text-[22px] sm:text-[24px] font-semibold leading-tight text-[#fafafa] tracking-[-0.5px]">
        {value}
      </span>
      <span className="font-sans text-[11px] sm:text-[12px] font-normal leading-none text-white/50 uppercase tracking-[0.5px]">
        {label}
      </span>
    </div>
  );
}
