import {
  ShieldCheck,
  UserCheck,
  Lock,
  Headphones,
  CheckCircle2,
  FileCheck2,
  ArrowRight
} from 'lucide-react'

export default function TrustSecurity() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '$10,000 Item Protection Guarantee',
      description:
        'Owners can list with confidence. Every completed reservation is backed by our community guarantee protecting high-value cameras, tools, and electronics against damage or loss.',
      tag: 'Zero-Deductible Policy'
    },
    {
      icon: UserCheck,
      title: 'Mandatory Identity Verification',
      description:
        'Zero anonymous rentals. All renters and lenders must verify their identity using government-issued photo ID and active phone authentication before transacting.',
      tag: 'Verified Community'
    },
    {
      icon: Lock,
      title: 'Automated Escrow & Deposits',
      description:
        'Security deposits and rental fees are safely secured in automated escrow. Funds are never released until the gear is inspected, verified, and successfully handed back.',
      tag: 'Bank-Grade Security'
    },
    {
      icon: Headphones,
      title: '24/7 Human Dispute Resolution',
      description:
        'If dates conflict, gear encounters a defect, or plans change unexpectedly, our dedicated resolution team resolves claims quickly with real human support.',
      tag: 'Fast Resolution'
    }
  ]

  const safetyGuarantees = [
    'No hidden rental fees or surprise deductions',
    'Reviews strictly allowed after completed bookings',
    'Real-time availability calendar prevents double-bookings',
    'Instant cancellation protection prior to booking start'
  ]

  return (
    <section id="trust" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7DCF00]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
            Trust & Protection
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Borrow & Lend With Total Peace of Mind
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Lendora is engineered from the ground up to protect both renters and equipment owners. Every transaction is backed by verified trust, transparent policies, and complete financial security.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-[#FAFCF8] rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.1)] hover:border-[#7DCF00]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-[#558C00] shadow-xs group-hover:scale-105 group-hover:border-[#7DCF00]/50 transition-all">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[11px] font-bold text-[#3B6600] bg-[#F2FCE2] px-3 py-1 rounded-full border border-[#7DCF00]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Community Trust Strip */}
        <div className="rounded-2xl sm:rounded-3xl bg-slate-950 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle green ambient lighting in dark container */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7DCF00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#7DCF00] uppercase tracking-wider mb-2">
                <FileCheck2 className="w-4 h-4 text-[#7DCF00]" />
                Strict Community Standards
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Protected by the Lendora Community Shield
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you're renting out a $3,000 cinema rig or borrowing a lawn aerator, our security layers protect you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              {safetyGuarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#7DCF00] shrink-0" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
