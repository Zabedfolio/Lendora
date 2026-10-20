import { Leaf, Recycle, Globe2, HeartHandshake, ArrowRight } from 'lucide-react'

export default function CircularEconomyImpact() {
  const impacts = [
    {
      icon: Recycle,
      stat: '74%',
      label: 'Reduction in Idle Waste',
      desc: 'Consumer tools and cinema cameras sit unused 95% of their lifespans. Lendora keeps active equipment in continuous circulation.'
    },
    {
      icon: Globe2,
      stat: '140+ Tons',
      label: 'CO₂ Manufacturing Offset',
      desc: 'By sharing existing high-grade cameras and tools, our community avoids the heavy carbon emissions of manufacturing duplicate hardware.'
    },
    {
      icon: HeartHandshake,
      stat: '$380K+',
      label: 'Kept in Local Economies',
      desc: '95% of every rental dollar goes directly into the pockets of local creators, contractors, and families in your neighborhood.'
    },
    {
      icon: Leaf,
      stat: '5,200+',
      label: 'Projects Powered Sustainably',
      desc: 'Indie short films, home renovations, and camping trips completed without purchasing single-use consumer plastic or packaging.'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#68B000]" />
            Circular Economy & Sustainability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Better For Your Budget. Better For The Planet.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Consuming less and sharing more is the future of sustainable living. Every item rented on Lendora prevents unnecessary manufacturing and electronic waste.
          </p>
        </div>

        {/* 4 Impact Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-[#FAFCF8] rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.12)] hover:border-[#7DCF00]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-[#558C00] mb-5 shadow-2xs group-hover:scale-110 group-hover:bg-[#7DCF00] group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight mb-1">
                    {item.stat}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-[11px] font-bold text-[#457300]">
                  <span>Verified Environmental Metric</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
