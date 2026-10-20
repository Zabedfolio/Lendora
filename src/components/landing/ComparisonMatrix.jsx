import { Check, X, Sparkles, ArrowRight } from 'lucide-react'

export default function ComparisonMatrix() {
  const criteria = [
    {
      feature: 'Upfront Capital Required',
      retail: 'Full retail ($2,000 - $5,000+)',
      traditional: '$1,000 - $3,000 hold on card',
      lendora: 'Zero hold with verified ID',
      lendoraWins: true
    },
    {
      feature: 'Cost to Complete Project',
      retail: '100% of purchase price',
      traditional: 'High commercial daily rate',
      lendora: 'Save up to 90% vs buying',
      lendoraWins: true
    },
    {
      feature: 'Pickup & Handover Convenience',
      retail: 'Must store & maintain forever',
      traditional: 'Rigid 9am-5pm commercial store hours',
      lendora: 'Local neighborhood meeting or delivery',
      lendoraWins: true
    },
    {
      feature: 'Damage & Loss Coverage',
      retail: 'Buy separate third-party insurance',
      traditional: 'Expensive mandatory waiver fees',
      lendora: '$10,000 Community Protection included',
      lendoraWins: true
    },
    {
      feature: 'Idle Equipment Monetization',
      retail: 'Gear sits in closet depreciating',
      traditional: 'Only for commercial warehouses',
      lendora: 'Earn $500+/mo lending your idle gear',
      lendoraWins: true
    },
    {
      feature: 'Weekend & Holiday Flexibility',
      retail: 'N/A',
      traditional: 'Closed weekends; extra day charge',
      lendora: 'Flexible hours agreed with owner',
      lendoraWins: true
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
            Smart Economic Choice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Renting on Lendora Wins
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            See how peer-to-peer equipment sharing compares against buying retail and legacy commercial rental storefronts.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_35px_-5px_rgba(15,23,42,0.06)]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/70">
                <th className="py-5 px-6 text-sm font-extrabold text-slate-900 w-2/5">
                  Comparison Feature
                </th>
                <th className="py-5 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/5 text-center">
                  Buying Retail
                </th>
                <th className="py-5 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/5 text-center">
                  Legacy Rental Shops
                </th>
                <th className="py-5 px-6 text-xs font-black uppercase tracking-wider w-1/5 text-center bg-[#F2FCE2]/70 text-[#3A6600] border-x border-[#7DCF00]/30">
                  <div className="inline-flex items-center gap-1.5 font-bold">
                    <span>Lendora P2P</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-sm">
              {criteria.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/60 transition-colors duration-150"
                >
                  {/* Feature Label */}
                  <td className="py-4.5 px-6 font-bold text-slate-900">
                    {row.feature}
                  </td>

                  {/* Buying Retail */}
                  <td className="py-4.5 px-6 text-center text-xs font-medium text-slate-500">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" />
                      <span>{row.retail}</span>
                    </div>
                  </td>

                  {/* Legacy Rental Shops */}
                  <td className="py-4.5 px-6 text-center text-xs font-medium text-slate-500">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-4 h-4 text-amber-500" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>

                  {/* Lendora Column (Highlighted) */}
                  <td className="py-4.5 px-6 text-center text-xs font-bold text-slate-950 bg-[#F2FCE2]/40 border-x border-[#7DCF00]/25">
                    <div className="flex flex-col items-center gap-1 text-[#335900]">
                      <span className="w-5 h-5 rounded-full bg-[#7DCF00] text-slate-950 flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{row.lendora}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold tracking-tight mb-1">
              Ready to save 90% on your next project?
            </h4>
            <p className="text-xs text-slate-300">
              Join thousands of filmmakers, photographers, contractors, and campers borrowing locally.
            </p>
          </div>

          <a
            href="/items"
            className="btn-primary-glow px-6 py-3 rounded-xl text-xs font-bold text-slate-950 shrink-0 inline-flex items-center gap-2"
          >
            <span>Explore Gear Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  )
}
