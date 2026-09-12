import { motion } from "framer-motion";
export default function StatTile({ value, label }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      className="flex flex-col gap-1 flex-1 min-w-0
                 rounded-[16px] border border-[#f0f0f0] bg-white p-5
                 shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                 hover:border-[#e0e0e0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                 transition-all duration-300"
    >
      <span className="font-sans text-[28px] font-bold leading-[34px] text-[#2c578b] tracking-[-0.5px]">
        {value}
      </span>
      <span className="font-sans text-[12px] font-medium leading-[16px] text-[#737373] uppercase tracking-[0.5px]">
        {label}
      </span>
    </motion.div>
  );
}
