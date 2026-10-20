import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function CommunityStories() {
  const stories = [
    {
      role: 'Indie Filmmaker & Renter',
      name: 'Maya Lin',
      location: 'San Francisco, CA',
      avatar: 'ML',
      rating: 5,
      gearRented: 'Sony FX3 Cinema Rig + 24-70mm GM II',
      duration: '4-day commercial project',
      quote:
        'Buying an FX3 plus cinema glass would have wiped out our client production budget ($4,500+). Renting from Marcus on Lendora cost us $380 with zero paperwork friction. The gear was calibrated, pristine, and ready to roll.',
      savings: 'Saved $4,120 vs buying'
    },
    {
      role: 'Workshop Owner & Gear Host',
      name: 'David Thorne',
      location: 'Oakland, CA',
      avatar: 'DT',
      rating: 5,
      gearRented: 'DeWalt 5-Tool XR Kit & Heavy Demolition Hammer',
      duration: 'Active Host • 42 completed bookings',
      quote:
        'My workshop tools used to sit idle Monday through Friday. I listed them on Lendora and now average $780 every month lending to neighborhood homeowners. The $10,000 protection policy gives me complete confidence.',
      savings: 'Earned $6,200+ this year'
    },
    {
      role: 'Audio Engineer & Renter',
      name: 'Carlos Mendoza',
      location: 'Berkeley, CA',
      avatar: 'CM',
      rating: 5,
      gearRented: 'Pioneer DJ OPUS-QUAD Standalone Console',
      duration: 'Weekend wedding event',
      quote:
        'Commercial rental houses in SF wanted a $3,500 credit card hold and strict 5pm Friday return. On Lendora, I arranged doorstep handover with Julian. The inclusive calendar and deposit escrow made it effortless.',
      savings: 'Zero commercial deposit hold'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#FAFCF8] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5 text-[#68B000]" />
            Verified Community Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved By Creators, Hosts & DIYers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Per Lendora's trust protocol, reviews are strictly unlocked after completed rentals. Here’s what real members have to say.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_6px_25px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_35px_-8px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.12)] hover:border-[#7DCF00]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#457300] bg-[#F2FCE2] px-2.5 py-0.5 rounded-full border border-[#7DCF00]/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#68B000]" />
                    Verified Rental
                  </span>
                </div>

                {/* Gear Highlight Badge */}
                <div className="text-xs font-bold text-slate-800 bg-slate-50 border border-slate-100 rounded-lg p-2.5 mb-4">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Gear: {story.gearRented}
                  </div>
                  <div className="text-slate-600 font-medium text-[11px] mt-0.5">
                    {story.duration}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{story.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-mono font-bold text-xs flex items-center justify-center">
                    {story.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">
                      {story.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {story.role}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-extrabold text-[#3B6600] bg-[#F2FCE2] px-2.5 py-1 rounded-md">
                  {story.savings}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
