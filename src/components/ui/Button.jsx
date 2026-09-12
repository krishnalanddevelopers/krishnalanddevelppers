export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-[#c9a84c] hover:bg-[#b8973e] text-white",
    secondary:
      "bg-transparent border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white",
    dark: "bg-[#171717] hover:bg-[#0a0a0a] text-white",
    outline:
      "bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-[10px]",
    md: "px-5 py-2 text-xs",
    lg: "px-8 py-3 text-sm",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
