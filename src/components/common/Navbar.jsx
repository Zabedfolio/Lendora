import { useState, useEffect } from 'react'
import {
  Search,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  Compass,
  Layers,
  HelpCircle
} from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] py-3'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with ambient glow */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group relative">
              <div className="relative">
                {/* Ambient glow behind logo */}
                <div className="absolute -inset-1.5 rounded-full bg-[#7DCF00]/25 blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
                <img
                  src="/Lendora-logo.png"
                  alt="Lendora Logo"
                  className="relative h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center">
                Lendora
                <span className="inline-block w-2 h-2 rounded-full bg-[#7DCF00] ml-1 shadow-[0_0_8px_#7DCF00]" />
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <a
                href="#explore"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/70 transition-all flex items-center gap-1.5 group"
              >
                <Compass className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors" />
                Explore Gear
              </a>

              <a
                href="#categories"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/70 transition-all flex items-center gap-1.5 group"
              >
                <Layers className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors" />
                Categories
              </a>

              <a
                href="#how-it-works"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/70 transition-all flex items-center gap-1.5 group"
              >
                <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors" />
                How It Works
              </a>

              <a
                href="#trust"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/70 transition-all flex items-center gap-1.5 group"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors" />
                Trust & Safety
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lister CTA Link */}
            <a
              href="#lister"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#558C00] bg-[#F2FCE2] hover:bg-[#E5F9C9] border border-[#7DCF00]/30 rounded-full transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#68B000]" />
              <span>List Your Gear</span>
              <span className="bg-[#7DCF00] text-slate-900 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                Earn
              </span>
            </a>

            <div className="h-5 w-px bg-slate-200 mx-1" />

            {/* Sign In Button */}
            <a
              href="#login"
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Sign In
            </a>

            {/* Glowing Call-to-action button with lighting spread */}
            <a
              href="#explore"
              className="btn-primary-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm tracking-wide"
            >
              <span>Rent Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#explore"
              className="btn-primary-glow text-xs px-3.5 py-2 rounded-lg inline-flex items-center gap-1"
            >
              <span>Rent</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <Compass className="w-4 h-4 text-[#68B000]" />
              Explore Gear
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <Layers className="w-4 h-4 text-[#68B000]" />
              Browse Categories
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <HelpCircle className="w-4 h-4 text-[#68B000]" />
              How It Works
            </a>
            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#68B000]" />
              Trust & Safety
            </a>
            <a
              href="#lister"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-[#F2FCE2] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <PlusCircle className="w-4 h-4 text-[#68B000]" />
                List Your Gear
              </div>
              <span className="text-xs bg-[#7DCF00] text-slate-900 font-bold px-2 py-0.5 rounded-full">
                Earn $$$
              </span>
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              Sign In
            </a>
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-glow w-full text-center py-3 text-sm rounded-xl justify-center inline-flex items-center gap-2"
            >
              <span>Get Started & Rent</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
