export default function SectionHeading({ children, id, className = "" }) {
  return (
    <h2
      id={id}
      className={`font-serif text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[34px] sm:leading-[38px] md:leading-[42px] tracking-[-0.025em] text-[#0a0a0a] ${className}`}
    >
      {children}
    </h2>
  );
}
