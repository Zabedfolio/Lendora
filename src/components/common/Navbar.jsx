import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-lg shadow-sm">
                L
              </span>
              <span>Lendora</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#explore" className="text-slate-300 hover:text-white transition-colors">
              Explore
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <a
            href="#home"
            className="block text-base font-medium text-white px-3 py-2 rounded-md hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#explore"
            className="block text-base font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            Explore
          </a>
          <a
            href="#how-it-works"
            className="block text-base font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#about"
            className="block text-base font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#login"
              className="text-center text-base font-medium text-slate-300 hover:text-white py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-center text-base font-medium bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
