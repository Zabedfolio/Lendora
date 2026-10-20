import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    marketplace: [
      { name: 'Cameras & Cinema', href: '/categories/cameras' },
      { name: 'Power Tools & Workshop', href: '/categories/tools' },
      { name: 'DJ & Audio Gear', href: '/categories/electronics' },
      { name: 'Drones & Aerial', href: '/categories/cameras' },
      { name: 'Event & Party', href: '/categories/party-events' },
      { name: 'Musical Instruments', href: '/categories/musical-instruments' }
    ],
    platform: [
      { name: 'How It Works', href: '/#how-it-works' },
      { name: 'Real-Time Availability', href: '/#availability' },
      { name: '$10k Lender Shield', href: '/#trust' },
      { name: 'Earnings Calculator', href: '/#calculator' },
      { name: 'Verified Reviews', href: '/#stories' },
      { name: 'Help & FAQs', href: '/#faq' }
    ],
    company: [
      { name: 'About Lendora', href: '/about' },
      { name: 'Escrow Protection', href: '/protection' },
      { name: 'Dispute Resolution', href: '/disputes' },
      { name: 'Lister Guidelines', href: '/guidelines' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }

  return (
    <footer className="bg-[#040702] text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#7DCF00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <a href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#7DCF00] p-1.5 shadow-[0_0_20px_rgba(125,207,0,0.4)] flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="/Lendora-icon.png"
                  alt="Lendora Mark"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Lendora
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The premier peer-to-peer equipment rental marketplace. Rent top-tier creative and industrial gear with zero double-booking and full escrow protection.
            </p>

            {/* Social Icons matching reference circular pill styling */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Marketplace */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Gear
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.marketplace.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Platform & Safety */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.platform.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching reference layout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            @{currentYear} Lendora Marketplace. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </a>
            <a href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Preferences
            </a>
            <a href="/security" className="hover:text-slate-300 transition-colors">
              Security Shield
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
