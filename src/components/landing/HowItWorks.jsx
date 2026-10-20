import { useState } from 'react'
import {
  CalendarCheck,
  MapPin,
  RotateCcw,
  PlusCircle,
  ShieldCheck,
  Wallet,
  ArrowRight
} from 'lucide-react'

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('renter') // 'renter' | 'lister'

  const renterSteps = [
    {
      step: '01',
      title: 'Find & Reserve',
      desc: 'Browse cinema cameras, power tools, party gear, or drones nearby. Select your exact rental dates with real-time availability and transparent pricing.',
      icon: CalendarCheck,
      highlight: 'No hidden fees'
    },
    {
      step: '02',
      title: 'Meet & Inspect',
      desc: 'Coordinate a convenient local pickup or doorstep drop-off with a verified owner. Inspect the equipment together to confirm condition before starting.',
      icon: MapPin,
      highlight: 'Verified lenders'
    },
    {
      step: '03',
      title: 'Return & Review',
      desc: 'Bring the gear back on your scheduled end date. Your refundable security deposit is automatically released, and you leave a verified community review.',
      icon: RotateCcw,
      highlight: 'Instant deposit release'
    }
  ]

  const listerSteps = [
    {
      step: '01',
      title: 'List in 2 Minutes',
      desc: 'Snap a few photos of your idle gear, set your daily rental price, and specify available dates on your personal calendar.',
      icon: PlusCircle,
      highlight: 'Free listing'
    },
    {
      step: '02',
      title: 'Accept & Hand Over',
      desc: 'Review incoming requests from background-checked renters. Accept bookings that fit your schedule and arrange a quick handover.',
      icon: ShieldCheck,
      highlight: '$10k Protection included'
    },
    {
      step: '03',
      title: 'Get Paid Fast',
      desc: 'Rental earnings are deposited straight into your bank account as soon as the rental concludes successfully. Keep 95% of your earnings.',
      icon: Wallet,
      highlight: 'Keep 95% of fees'
    }
  ]

  const steps = activeTab === 'renter' ? renterSteps : listerSteps

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAFCF8] relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7DCF00]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
            Rental Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            How Lendora Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you want to borrow premium equipment for a weekend project or monetize gear collecting dust, we make the process safe, frictionless, and transparent.
          </p>

          {/* Interactive Role Switcher Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 mt-8 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('renter')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'renter'
                  ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Renters
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lister')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'lister'
                  ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Gear Owners
            </button>
          </div>
        </div>

        {/* 3-Step Grid Cards with Connected Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16">
          {/* Connecting Track Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#7DCF00]/20 via-[#7DCF00]/40 to-[#7DCF00]/20 -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-6px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(15,23,42,0.1),0_0_20px_rgba(125,207,0,0.12)] hover:border-[#7DCF00]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-11 h-11 rounded-xl bg-slate-950 text-white font-mono font-bold text-sm flex items-center justify-center shadow-md group-hover:bg-[#7DCF00] group-hover:text-slate-950 transition-colors duration-300">
                      {item.step}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#F2FCE2] border border-[#7DCF00]/30 flex items-center justify-center text-[#558C00] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Highlight Micro-Tag */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#457300] bg-[#F2FCE2] px-3 py-1 rounded-full border border-[#7DCF00]/25">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-[#558C00] transition-colors flex items-center gap-1">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 text-center">
          <a
            href={activeTab === 'renter' ? '/items' : '/items/new'}
            className="btn-primary-glow inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold text-slate-950"
          >
            <span>{activeTab === 'renter' ? 'Browse Available Rentals' : 'List Your Gear & Start Earning'}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  )
}
