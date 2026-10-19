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
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <img
                src="/Lendora-logo.png"
                alt="Lendora"
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Lendora
              </span>
            </a>

            {/* Desktop Navigation Links — Pure text, no icons or emojis */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-500">
              <a
                href="#explore"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Explore Gear
              </a>
              <a
                href="#categories"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Categories
              </a>
              <a
                href="#how-it-works"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#trust"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Trust & Safety
              </a>
              <a
                href="#lister"
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                List Your Gear
              </a>
            </nav>
          </div>

          {/* Right Action Elements */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            {/* Sign in text button */}
            <a
              href="#login"
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Sign In
            </a>

            {/* Primary Action Button (Clean #7DCF00 pill with subtle lighting spread glow, no icons) */}
            <a
              href="#explore"
              className="btn-primary-glow px-4 sm:px-5 py-2 rounded-xl text-sm font-bold text-slate-950 tracking-tight whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
            >
              Rent Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#explore"
              className="btn-primary-glow px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-950"
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
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Explore Gear
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Categories
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              How It Works
            </a>
            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              Trust & Safety
            </a>
            <a
              href="#lister"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-slate-900"
            >
              List Your Gear
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Sign In
            </a>
            <a
              href="#explore"
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
