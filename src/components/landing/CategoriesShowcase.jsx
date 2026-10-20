import {
  Camera,
  Wrench,
  Music,
  Tent,
  Tv,
  PartyPopper,
  Shirt,
  Video,
  ArrowRight
} from 'lucide-react'

export default function CategoriesShowcase() {
  const categories = [
    {
      id: 'cameras',
      slug: 'cameras',
      name: 'Cameras & Cinema Gear',
      desc: 'Cinema rigs, prime lenses, gimbals, lighting kits',
      count: '1,420+ items',
      startingPrice: 'From $35/day',
      icon: Camera
    },
    {
      id: 'drones',
      slug: 'drones',
      name: 'Drones & Action Cams',
      desc: 'DJI Mavic 3 Pro, FPV drones, GoPro 12, 360 cams',
      count: '680+ items',
      startingPrice: 'From $40/day',
      icon: Video
    },
    {
      id: 'tools',
      slug: 'tools',
      name: 'Power Tools & DIY',
      desc: 'Cordless saws, rotary hammers, tile cutters, drills',
      count: '1,890+ items',
      startingPrice: 'From $15/day',
      icon: Wrench
    },
    {
      id: 'audio',
      slug: 'audio',
      name: 'Audio & DJ Equipment',
      desc: 'Pioneer DJ consoles, PA speakers, wireless mics',
      count: '760+ items',
      startingPrice: 'From $50/day',
      icon: Music
    },
    {
      id: 'outdoors',
      slug: 'outdoors',
      name: 'Outdoors & Camping',
      desc: 'Rooftop tents, backpacking kits, portable power',
      count: '1,120+ items',
      startingPrice: 'From $20/day',
      icon: Tent
    },
    {
      id: 'events',
      slug: 'party-events',
      name: 'Party & Events',
      desc: 'Laser projectors, smoke machines, banquet chairs',
      count: '930+ items',
      startingPrice: 'From $30/day',
      icon: PartyPopper
    },
    {
      id: 'electronics',
      slug: 'electronics',
      name: 'Electronics & VR',
      desc: 'Meta Quest 3, 4K laser projectors, gaming consoles',
      count: '840+ items',
      startingPrice: 'From $25/day',
      icon: Tv
    },
    {
      id: 'fashion',
      slug: 'fashion',
      name: 'Designer Wear & Luxury',
      desc: 'Designer suits, gala dresses, luxury accessories',
      count: '510+ items',
      startingPrice: 'From $45/day',
      icon: Shirt
    }
  ]

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FAFCF8] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
              Browse by Category
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore High-Demand Gear
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-xl">
              From commercial film equipment to heavy-duty power tools, borrow verified gear locally on flexible dates.
            </p>
          </div>

          <a
            href="/items"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4D8000] hover:text-[#3B6600] group self-start md:self-auto shrink-0 transition-colors"
          >
            <span>View All 8 Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 8 Category Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.id}
                href={`/items?category=${cat.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.14)] hover:border-[#7DCF00]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Item Count */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F2FCE2] border border-[#7DCF00]/30 flex items-center justify-center text-[#558C00] group-hover:scale-110 group-hover:bg-[#7DCF00] group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 group-hover:bg-[#F2FCE2] group-hover:text-[#457300] px-2.5 py-0.5 rounded-full transition-colors">
                      {cat.count}
                    </span>
                  </div>

                  {/* Category Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#457300] transition-colors mb-1.5 tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Starting Price & Arrow */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    {cat.startingPrice}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-[#7DCF00] text-slate-400 group-hover:text-slate-950 flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
