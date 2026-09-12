export default function CompanyOverviewSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Company Overview */}
          <div>
            <span className="text-[#c9a84c] font-poppins text-xs tracking-[0.2em] uppercase font-medium">
              COMPANY OVERVIEW
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold mt-2 text-[#171717]">
              A refined approach
              <br />
              to land development
            </h2>
            <p className="text-[#737373] mt-4 leading-relaxed">
              From master planning to premium plot delivery, we create communities that balance
              architecture, infrastructure, and investment confidence.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="font-serif-display text-4xl font-bold text-[#c9a84c]">18+</div>
              <div className="text-[#737373] text-sm font-medium mt-1">Years</div>
            </div>
            <div>
              <div className="font-serif-display text-4xl font-bold text-[#c9a84c]">42</div>
              <div className="text-[#737373] text-sm font-medium mt-1">Projects</div>
            </div>
            <div>
              <div className="font-serif-display text-4xl font-bold text-[#c9a84c]">1.2K</div>
              <div className="text-[#737373] text-sm font-medium mt-1">Acres</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
