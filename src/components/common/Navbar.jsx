import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  Compass,
  Layers,
  HelpCircle,
  Sparkles
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
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.07)]'
          : 'bg-white/75 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-8 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Lendora-logo.png"
                  alt="Lendora Logo"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center whitespace-nowrap">
                Lendora
                <span className="inline-block w-2 h-2 rounded-full bg-[#7DCF00] ml-1 shadow-[0_0_8px_#7DCF00]" />
              </span>
            </a>

            {/* Desktop Navigation Links (Nowrap & Proper Gap) */}
            <nav className="hidden xl:flex items-center gap-1.5 shrink-0">
              <a
                href="#explore"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-2 whitespace-nowrap group"
              >
                <Compass className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors shrink-0" />
                <span>Explore Gear</span>
              </a>

              <a
                href="#categories"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-2 whitespace-nowrap group"
              >
                <Layers className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors shrink-0" />
                <span>Categories</span>
              </a>

              <a
                href="#how-it-works"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-2 whitespace-nowrap group"
              >
                <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors shrink-0" />
                <span>How It Works</span>
              </a>

              <a
                href="#trust"
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-2 whitespace-nowrap group"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-[#68B000] transition-colors shrink-0" />
                <span>Trust & Safety</span>
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Lister CTA Link */}
            <a
              href="#lister"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-[#4D8000] bg-[#F2FCE2] hover:bg-[#E5F9C9] border border-[#7DCF00]/30 rounded-full transition-all hover:scale-[1.02] whitespace-nowrap shrink-0 shadow-2xs"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#68B000] shrink-0" />
              <span>List Your Gear</span>
              <span className="bg-[#7DCF00] text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                Earn
              </span>
            </a>

            <div className="h-5 w-px bg-slate-200 mx-1 shrink-0" />

            {/* Sign In Button */}
            <a
              href="#login"
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Sign In
            </a>

            {/* Glowing Call-to-action button with lighting spread */}
            <a
              href="#explore"
              className="btn-primary-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide whitespace-nowrap shrink-0"
            >
              <span>Rent Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] shrink-0" />
            </a>
          </div>

          {/* Mobile & Tablet Navigation Controls */}
          <div className="flex xl:hidden items-center gap-2.5">
            <a
              href="#explore"
              className="btn-primary-glow text-xs sm:text-sm px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 font-bold whitespace-nowrap"
            >
              <span>Rent Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200/90 bg-white/95 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <Compass className="w-4 h-4 text-[#68B000]" />
              <span>Explore Gear</span>
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <Layers className="w-4 h-4 text-[#68B000]" />
              <span>Categories</span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <HelpCircle className="w-4 h-4 text-[#68B000]" />
              <span>How It Works</span>
            </a>
            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#68B000]" />
              <span>Trust & Safety</span>
            </a>
            <a
              href="#lister"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-[#F2FCE2] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <PlusCircle className="w-4 h-4 text-[#68B000]" />
                <span>List Your Gear</span>
              </div>
              <span className="text-xs bg-[#7DCF00] text-slate-950 font-bold px-2 py-0.5 rounded-full">
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
