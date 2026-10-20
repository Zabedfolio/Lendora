import { ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function FinalCtaBanner() {
  return (
    <section className="relative w-full min-h-[720px] sm:min-h-[820px] lg:min-h-[880px] bg-[#020501] text-white flex flex-col justify-between overflow-hidden">
      {/* 1. Full-Bleed Section Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-pedestal.jpg"
          alt="Lendora Ecosystem"
          className="w-full h-full object-cover object-bottom select-none"
        />
        {/* Top Vignette Overlay for smooth transition from preceding section */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#020501] via-[#020501]/80 to-transparent pointer-events-none" />
        
        {/* Bottom Vignette Overlay to blend seamlessly into Footer */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040702] via-[#040702]/80 to-transparent pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-gradient-to-b from-[#7DCF00]/25 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* 2. Top Content: Tag, Headline, Subtitle, and CTA Button */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#7DCF00] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#7DCF00]" />
          Instant Peer-to-Peer Access
        </div>

        {/* Headline matching reference image typography */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-3xl">
          Start Renting or Earning <br className="hidden sm:inline" />
          In Minutes
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-xl leading-relaxed">
          Join thousands of creators, filmmakers, and gear hosts sharing equipment with zero friction, instant date reservations, and $10,000 protection.
        </p>

        {/* Center Glowing Action Pill matching reference image button style */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-7">
          <a
            href="/items"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(125,207,0,0.25)] transition-all duration-300 inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Explore Rental Catalog</span>
            <ChevronRight className="w-4 h-4 text-[#7DCF00] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/items/new"
            className="btn-primary-glow px-6 py-2.5 rounded-full text-slate-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>List Your Gear For Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 3. Centerpiece Floating Brand Emblem sitting atop the glowing background pedestal */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pb-24 sm:pb-32 lg:pb-36 pointer-events-none">
        <div className="relative flex flex-col items-center">
          {/* Floating Ambient Aura Glow behind the logo */}
          <div className="absolute -inset-6 bg-[#7DCF00]/50 rounded-full blur-2xl animate-pulse" />

          {/* Floating Lendora Brand Emblem */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-slate-950/85 border-2 border-[#7DCF00]/80 p-3 sm:p-3.5 shadow-[0_0_35px_rgba(125,207,0,0.7)] backdrop-blur-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="/Lendora-icon.png"
              alt="Lendora Mark"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Floating Verified Badge Tag */}
          <div className="mt-3.5 px-3 py-1 rounded-full bg-slate-950/90 border border-[#7DCF00]/40 text-[11px] font-bold text-[#7DCF00] shadow-lg flex items-center gap-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7DCF00]" />
            <span>$10,000 Shield Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
