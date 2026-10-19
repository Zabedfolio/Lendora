import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import RentalSearchBar from './RentalSearchBar'

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-radial from-[#F0FBE0]/60 via-[#FAFCF8] to-[#FAFCF8]">
      {/* Decorative ambient lighting spread background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7DCF00]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-1/4 w-[300px] h-[300px] bg-[#7DCF00]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Kicker — High-Contrast Obsidian Tech Badge */}
          <a
            href="/items"
            className="group inline-flex items-center gap-2.5 p-1 pl-1.5 pr-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white shadow-[0_4px_20px_-4px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_-4px_rgba(15,23,42,0.25)] transition-all duration-300 mb-8 cursor-pointer border border-slate-800"
          >
            <span className="px-2.5 py-0.5 rounded-full bg-[#7DCF00] text-slate-950 text-[10px] font-black uppercase tracking-wider">
              Marketplace
            </span>
            <span className="text-xs font-medium text-slate-300">
              The #1 Peer-to-Peer Platform
            </span>
            <span className="h-3 w-px bg-slate-800" />
            <span className="text-xs font-bold text-[#7DCF00] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              <span>Save 90% vs Buying</span>
              <span className="text-slate-400 group-hover:text-white transition-colors">&rarr;</span>
            </span>
          </a>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
            Don't Buy For One Weekend.{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5B9600] via-[#6EB800] to-[#7DCF00]">
              Rent It On Demand.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Access pro cinema cameras, cordless power tools, party gear, drones, and camping kits from trusted neighbors in your community.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="/items"
              className="btn-primary-glow w-full sm:w-auto px-7 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2.5 font-bold cursor-pointer"
            >
              <span>Explore Gear Available Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="/items/new"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#7DCF00]/50 transition-all shadow-xs hover:shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Monetize Your Idle Gear</span>
              <span className="text-xs bg-[#7DCF00]/20 text-[#4D8000] px-2 py-0.5 rounded-md font-bold">
                +$500/mo
              </span>
            </a>
          </div>

          {/* Trust points line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-500 mb-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#68B000]" />
              Verified Owners
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#68B000]" />
              $10k Rental Protection
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#68B000]" />
              No Hidden Fees
            </span>
          </div>

          {/* Search Bar Component */}
          <RentalSearchBar />
        </div>

        {/* Live Marketplace Metrics Banner */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4,800<span className="text-[#68B000]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">Active Gear Listings</div>
          </div>

          <div className="text-center p-2 border-l border-slate-200/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              $240K<span className="text-[#68B000]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">Renter Savings</div>
          </div>

          <div className="text-center p-2 border-l-0 md:border-l border-slate-200/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              100<span className="text-[#68B000]">%</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">Damage Protection</div>
          </div>

          <div className="text-center p-2 border-l border-slate-200/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">Verified Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}
