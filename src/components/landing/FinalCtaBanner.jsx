import { ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function FinalCtaBanner() {
  return (
    <section className="relative bg-[#060A03] text-white pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background Grid Pattern & Top Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#132007_1px,transparent_1px),linear-gradient(to_bottom,#132007_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Top Overhead Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#7DCF00]/20 via-[#7DCF00]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#7DCF00] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#7DCF00]" />
          Instant Peer-to-Peer Access
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          Start Renting or Earning <br className="hidden sm:inline" />
          In Minutes
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Join thousands of creators, filmmakers, and gear hosts sharing equipment with zero friction, instant date reservations, and $10,000 protection.
        </p>

        {/* Action Button Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-12 relative z-20">
          <a
            href="/items"
            className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(125,207,0,0.25)] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Rental Catalog</span>
            <ChevronRight className="w-4 h-4 text-[#7DCF00] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/items/new"
            className="btn-primary-glow px-7 py-3 rounded-full text-slate-950 font-extrabold text-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>List Your Gear For Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Visual Showcase: 3D Centerpiece Pedestal with Floating Lendora Mark */}
        <div className="relative max-w-4xl mx-auto mt-4 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(125,207,0,0.2)]">
          {/* Generated 3D Pedestal Visual */}
          <img
            src="/cta-pedestal.jpg"
            alt="Lendora Smart Platform Pedestal"
            className="w-full h-auto object-cover max-h-[380px] sm:max-h-[480px] select-none"
            loading="lazy"
          />

          {/* Floating Lendora Brand Emblem positioned above the glowing pedestal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-12 sm:pb-16">
            <div className="relative flex flex-col items-center">
              {/* Floating Ambient Aura Glow */}
              <div className="absolute -inset-4 bg-[#7DCF00]/40 rounded-3xl blur-2xl animate-pulse" />

              {/* Glassmorphic Logo Shield */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-slate-950/80 border-2 border-[#7DCF00]/70 p-3 sm:p-3.5 shadow-[0_0_35px_rgba(125,207,0,0.6)] backdrop-blur-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/Lendora-icon.png"
                  alt="Lendora"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Floating Badge Tag */}
              <div className="mt-3 px-3 py-1 rounded-full bg-slate-950/90 border border-[#7DCF00]/40 text-[11px] font-bold text-[#7DCF00] shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7DCF00]" />
                <span>$10,000 Shield Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
