import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
        isScrolled ? 'border-slate-200 shadow-xs' : 'border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Logo + Nav Links (Turfgen style) */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Logo links to home root "/" */}
            <a href="/" className="flex items-center gap-2.5 shrink-0 group focus:outline-none">
              <img
                src="/Lendora-icon.png"
                alt="Lendora"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-xl shadow-[0_2px_10px_rgba(125,207,0,0.3)] transition-transform group-hover:scale-105 shrink-0"
              />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Lendora
              </span>
            </a>

            {/* Desktop Navigation Links — Multi-page URLs without hash '#' */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-500">
              <a
                href="/items"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Explore Gear
              </a>
              <a
                href="/categories"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Categories
              </a>
              <a
                href="/how-it-works"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="/trust"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Trust & Safety
              </a>
            </nav>
          </div>

          {/* Right Action Elements */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Highlighted List Your Gear — matched rounded-xl to Rent Now */}
            <a
              href="/items/new"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#457300] bg-[#F2FCE2] hover:bg-[#E5F9C9] border border-[#7DCF00]/40 rounded-xl transition-all hover:scale-[1.02] whitespace-nowrap shrink-0 shadow-2xs"
            >
              <span>List Your Gear</span>
              <span className="bg-[#7DCF00] text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-md">
                Earn
              </span>
            </a>

            <div className="h-4 w-px bg-slate-200 mx-0.5 shrink-0" />

            {/* Sign in text button */}
            <a
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Sign In
            </a>

            {/* Primary Action Button (Clean #7DCF00 with matched rounded-xl) */}
            <a
              href="/items"
              className="btn-primary-glow px-4 sm:px-5 py-2 rounded-xl text-sm font-bold text-slate-950 tracking-tight whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
            >
              Rent Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="/items"
              className="btn-primary-glow px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950"
            >
              Rent Now
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-600">
            <a
              href="/items"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Explore Gear
            </a>
            <a
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Categories
            </a>
            <a
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              How It Works
            </a>
            <a
              href="/trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Trust & Safety
            </a>
            <a
              href="/items/new"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 bg-[#F2FCE2] hover:bg-[#E5F9C9] rounded-xl border border-[#7DCF00]/30"
            >
              <span>List Your Gear</span>
              <span className="text-[10px] bg-[#7DCF00] text-slate-950 font-black px-2 py-0.5 rounded-full">
                Earn
              </span>
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Sign In
            </a>
            <a
              href="/items"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-glow w-full text-center py-2.5 text-sm font-bold text-slate-950 rounded-xl"
            >
              Rent Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
