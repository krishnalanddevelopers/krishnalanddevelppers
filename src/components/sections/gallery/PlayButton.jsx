export default function PlayButton() {
  return (
    <div
      className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                 bg-white/20 backdrop-blur-md border border-white/30
                 flex items-center justify-center transition-all duration-300
                 group-hover:bg-white/35 group-hover:scale-105 
                 shadow-[0px_4px_12px_rgba(0,0,0,0.15)] cursor-pointer"
    >
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="ml-0.5">
        <path
          d="M11 7L1 13V1L11 7Z"
          fill="white"
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
