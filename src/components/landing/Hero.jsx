import { useState } from 'react'
import {
  Calendar,
  MapPin,
  Shield,
  Star,
  ArrowUpRight,
  SlidersHorizontal,
  Search,
  Sparkles,
  Check,
  TrendingUp,
  Camera,
  Wrench,
  Music,
  Tent
} from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rent') // 'rent' | 'list'
  const [selectedGearIndex, setSelectedGearIndex] = useState(0)

  // Sample real-world rental gear showcase
  const gearShowcase = [
    {
      id: 1,
      name: 'Sony FX3 Cinema Rig + 24-70mm GM II',
      category: 'Cinema & Photography',
      location: 'Downtown • 1.4 mi',
      dailyPrice: 65,
      retailPrice: 4200,
      days: 3,
      rating: 5.0,
      reviewsCount: 38,
      owner: {
        name: 'Marcus Vance',
        role: 'Verified DP',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      },
      tag: 'Cinema Package',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'DJI Mavic 3 Pro Cine + 3 Flight Batteries',
      category: 'Drones & Aerial',
      location: 'Westside • 2.8 mi',
      dailyPrice: 55,
      retailPrice: 2999,
      days: 2,
      rating: 4.9,
      reviewsCount: 24,
      owner: {
        name: 'Elena Rostova',
        role: 'Part 107 Pilot',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      },
      tag: '4K ProRes',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'DeWalt 20V Max 5-Tool Cordless Combo Kit',
      category: 'Power Tools & Renovation',
      location: 'North Bay • 0.9 mi',
      dailyPrice: 28,
      retailPrice: 649,
      days: 4,
      rating: 5.0,
      reviewsCount: 42,
      owner: {
        name: 'David Chen',
        role: 'Licensed Builder',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      },
      tag: 'Heavy Duty',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
    }
  ]

  const currentGear = gearShowcase[selectedGearIndex]
  const totalRentalCost = currentGear.dailyPrice * currentGear.days
  const totalSavings = currentGear.retailPrice - totalRentalCost
  const percentSaved = Math.round((totalSavings / currentGear.retailPrice) * 100)

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-white">
      {/* Structural architectural background grid (subtle, high precision) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8DF_1px,transparent_1px),linear-gradient(to_bottom,#E2E8DF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none -z-10" />

      {/* Subtle directional ambient light */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#7DCF00]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Confident Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Minimalist Context Label */}
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
              <span>Peer-to-Peer Equipment Network</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#558C00]">Verified Local Lenders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              High-end gear when you need it.{' '}
              <span className="text-slate-400 font-light block sm:inline">Zero retail waste when you don't.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Rent cinema camera packages, heavy-duty power tools, event audio, and outdoor gear by the day from verified creatives and neighbors nearby.
            </p>

            {/* Interactive Mode Selector (Renter vs Lister) */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab('rent')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'rent'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                I want to Rent Gear
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'list'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>I want to List & Earn</span>
                <span className="text-[10px] bg-[#7DCF00] text-slate-950 px-1.5 py-0.2 rounded-md font-extrabold">
                  +$500/mo
                </span>
              </button>
            </div>

            {/* Dynamic Content based on activeTab */}
            {activeTab === 'rent' ? (
              <div className="space-y-6">
                {/* Search Bar Inline Container */}
                <div className="p-2 bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06),0_0_20px_rgba(125,207,0,0.12)]">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-slate-50/80 rounded-xl border border-slate-200/60 focus-within:border-[#7DCF00] transition-colors">
                      <Search className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search gear (e.g. Sony FX3, Drone, Drill)..."
                        className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>

                    <div className="w-full sm:w-44 flex items-center gap-2 px-3 py-2 bg-slate-50/80 rounded-xl border border-slate-200/60">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Location / Zip"
                        className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>

                    <a
                      href="#explore"
                      className="btn-primary-glow px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 inline-flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Find Gear</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>

                {/* Micro Category Switchers */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
                  <span className="font-semibold text-slate-400">Popular:</span>
                  {['Cinema Cameras', 'Drones', 'Cordless Tools', 'DJ Rigs', 'Campers'].map((item, i) => (
                    <a
                      key={i}
                      href="#explore"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#F2FCE2] text-slate-700 hover:text-[#457300] font-medium transition-colors border border-transparent hover:border-[#7DCF00]/30"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              /* Lister Value Prop */
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F2FCE2] to-white border border-[#7DCF00]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Turn idle gear into passive revenue</h3>
                    <p className="text-sm text-slate-600 mt-0.5">Average listers earn $450 to $1,200 every month on Lendora.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-slate-400 block">Payout Speed</span>
                    <span className="font-extrabold text-slate-900 text-base text-[#558C00]">Next Day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-slate-400 font-medium block">Cameras</span>
                    <span className="font-bold text-slate-900 text-sm">$600/mo avg</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-slate-400 font-medium block">Power Tools</span>
                    <span className="font-bold text-slate-900 text-sm">$350/mo avg</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-slate-400 font-medium block">Drones</span>
                    <span className="font-bold text-slate-900 text-sm">$500/mo avg</span>
                  </div>
                </div>

                <a
                  href="#lister"
                  className="btn-primary-glow w-full py-3 rounded-xl text-sm font-bold text-slate-950 inline-flex items-center justify-center gap-2 mt-2"
                >
                  <span>Start Listing Your Gear — Free</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            )}

            {/* Proof Points & Protection Guarantee */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F2FCE2] text-[#457300] flex items-center justify-center font-bold text-[10px]">
                  ✓
                </div>
                <span>$10,000 Item Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F2FCE2] text-[#457300] flex items-center justify-center font-bold text-[10px]">
                  ✓
                </div>
                <span>Strict ID Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F2FCE2] text-[#457300] flex items-center justify-center font-bold text-[10px]">
                  ✓
                </div>
                <span>Zero Double-Booking Engine</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive "Rental Pass" Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Gear Selector Tabs on top of the card */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Live Rental Example
              </span>
              <div className="flex items-center gap-1.5">
                {gearShowcase.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGearIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      selectedGearIndex === idx
                        ? 'bg-[#7DCF00] scale-125 shadow-[0_0_8px_#7DCF00]'
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Select item ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* The Physical-Feel Rental Ticket Card */}
            <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12),0_0_30px_rgba(125,207,0,0.15)] overflow-hidden transition-all duration-300">
              {/* Image Preview with Tags */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900 group">
                <img
                  src={currentGear.image}
                  alt={currentGear.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    {currentGear.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#7DCF00] text-slate-950 text-xs font-extrabold shadow-sm">
                    {currentGear.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-extrabold text-base line-clamp-1">{currentGear.name}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#7DCF00]" />
                      {currentGear.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-white">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {currentGear.rating} ({currentGear.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body & Rental Economics Breakdown */}
              <div className="p-5 space-y-4">
                {/* Lister Summary */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={currentGear.owner.avatar}
                      alt={currentGear.owner.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#7DCF00]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{currentGear.owner.name}</div>
                      <div className="text-[11px] text-[#558C00] font-medium">{currentGear.owner.role}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    ID Verified
                  </span>
                </div>

                {/* Date & Pricing Comparison Grid */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Rental Period</span>
                    <span className="font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {currentGear.days} Days (Weekend)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Daily Rate</span>
                    <span className="font-extrabold text-slate-900">${currentGear.dailyPrice} / day</span>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block line-through">Buy New: ${currentGear.retailPrice}</span>
                      <span className="text-sm font-extrabold text-slate-950">
                        Total Rental: ${totalRentalCost}
                      </span>
                    </div>

                    {/* Savings Pill */}
                    <div className="text-right">
                      <span className="inline-block text-xs font-black text-[#3B6600] bg-[#EBFACF] px-2.5 py-1 rounded-full border border-[#7DCF00]/40">
                        Save {percentSaved}% (${totalSavings})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Button with Lighting Spread */}
                <a
                  href="#explore"
                  className="btn-primary-glow w-full py-3 rounded-xl text-sm font-bold text-slate-950 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book This Item Now</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                  <Shield className="w-3.5 h-3.5 text-[#68B000]" />
                  <span>Refundable deposit held securely in escrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
