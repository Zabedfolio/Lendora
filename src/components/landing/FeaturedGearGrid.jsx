import { useState } from 'react'
import {
  Star,
  ShieldCheck,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function FeaturedGearGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Equipment' },
    { id: 'cameras', label: 'Cameras & Cinema' },
    { id: 'drones', label: 'Drones' },
    { id: 'tools', label: 'Power Tools' },
    { id: 'audio', label: 'DJ & Audio' },
    { id: 'outdoors', label: 'Camping & Outdoors' }
  ]

  const gearItems = [
    {
      id: 1,
      category: 'cameras',
      categoryName: 'Cinema Camera',
      title: 'Sony FX3 Full-Frame Cinema Line + 24-70mm GM II',
      image: '/gear/sony-fx3.jpg',
      dailyPrice: 95,
      retailValue: '$4,200',
      rating: 4.98,
      reviews: 54,
      location: 'Mission District, SF',
      distance: '1.8 mi away',
      ownerName: 'Marcus V.',
      ownerAvatar: 'MV',
      availableToday: true,
      badge: 'Trending'
    },
    {
      id: 2,
      category: 'drones',
      categoryName: 'Pro Drone',
      title: 'DJI Mavic 3 Pro Cine (Triple-Camera Fly More Kit)',
      image: '/gear/dji-mavic.jpg',
      dailyPrice: 70,
      retailValue: '$3,100',
      rating: 4.95,
      reviews: 38,
      location: 'SOMA, San Francisco',
      distance: '2.4 mi away',
      ownerName: 'Elena R.',
      ownerAvatar: 'ER',
      availableToday: true,
      badge: 'Top Rated'
    },
    {
      id: 3,
      category: 'tools',
      categoryName: 'Power Tools',
      title: 'DeWalt 20V MAX XR 5-Tool Cordless Brushless Kit',
      image: '/gear/dewalt-kit.jpg',
      dailyPrice: 28,
      retailValue: '$720',
      rating: 4.92,
      reviews: 62,
      location: 'Sunset District, SF',
      distance: '3.1 mi away',
      ownerName: 'Dave K.',
      ownerAvatar: 'DK',
      availableToday: false,
      badge: 'Verified'
    },
    {
      id: 4,
      category: 'audio',
      categoryName: 'DJ System',
      title: 'Pioneer DJ OPUS-QUAD 4-Channel Standalone Console',
      image: '/gear/pioneer-dj.jpg',
      dailyPrice: 85,
      retailValue: '$3,400',
      rating: 5.0,
      reviews: 29,
      location: 'Oakland, CA',
      distance: '5.2 mi away',
      ownerName: 'Julian S.',
      ownerAvatar: 'JS',
      availableToday: true,
      badge: 'Pro Gear'
    },
    {
      id: 5,
      category: 'cameras',
      categoryName: 'Lighting Rig',
      title: 'Aputure LS 600d Pro High-Output Daylight LED Kit',
      image: '/gear/aputure-light.jpg',
      dailyPrice: 50,
      retailValue: '$1,890',
      rating: 4.94,
      reviews: 31,
      location: 'Potrero Hill, SF',
      distance: '2.0 mi away',
      ownerName: 'Chloe M.',
      ownerAvatar: 'CM',
      availableToday: true,
      badge: 'Verified'
    },
    {
      id: 6,
      category: 'outdoors',
      categoryName: 'Overland Camping',
      title: 'iKamper Skycamp 3.0 Hard-Shell 4-Person Roof Tent',
      image: '/gear/ikamper-tent.jpg',
      dailyPrice: 48,
      retailValue: '$4,100',
      rating: 4.97,
      reviews: 43,
      location: 'Berkeley, CA',
      distance: '7.8 mi away',
      ownerName: 'Ryan P.',
      ownerAvatar: 'RP',
      availableToday: false,
      badge: 'Popular'
    }
  ]

  const filteredItems =
    activeFilter === 'all'
      ? gearItems
      : gearItems.filter((item) => item.category === activeFilter)

  return (
    <section id="explore" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DCF00]" />
            Live Marketplace Inventory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trending Gear Available Nearby
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Rent high-end equipment from verified creators, DIYers, and audio engineers. Every booking includes $10,000 damage protection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gear Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_6px_25px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.1),0_0_22px_rgba(125,207,0,0.14)] hover:border-[#7DCF00]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Gear Card Image Banner */}
                <div className="h-52 relative overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlays for badge and text contrast */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* Top Category & Status Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/95 text-slate-800 shadow-sm border border-white/60 backdrop-blur-md">
                      {item.categoryName}
                    </span>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/90 text-white shadow-sm backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Gear Status Tag */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs font-semibold z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold backdrop-blur-md shadow-xs ${
                        item.availableToday
                          ? 'bg-white/95 text-[#3B6600] border border-[#7DCF00]/50'
                          : 'bg-slate-900/90 text-slate-200 border border-white/20'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.availableToday ? 'bg-[#7DCF00] animate-pulse' : 'bg-slate-400'
                        }`}
                      />
                      {item.availableToday ? 'Available This Week' : 'Book in Advance'}
                    </span>

                    <span className="text-[11px] font-bold text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 shadow-xs">
                      Retail: {item.retailValue}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-slate-400 font-medium">({item.reviews})</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.distance}</span>
                    </div>
                  </div>

                  {/* Gear Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#457300] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Owner Micro-Chip */}
                  <div className="flex items-center gap-2 pt-2 text-xs text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-[10px] flex items-center justify-center">
                      {item.ownerAvatar}
                    </div>
                    <span className="font-semibold text-slate-800">{item.ownerName}</span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1 text-[#457300] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#68B000]" />
                      ID Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price + Rent CTA */}
              <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/40">
                <div>
                  <div className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    ${item.dailyPrice}
                    <span className="text-xs font-semibold text-slate-500">/day</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    +$0 deposit with ID
                  </div>
                </div>

                <a
                  href="/items"
                  className="btn-primary-glow px-4 py-2 rounded-xl text-xs font-bold text-slate-950 inline-flex items-center gap-1.5"
                >
                  <span>Check Dates</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Inventory Button */}
        <div className="mt-14 text-center">
          <a
            href="/items"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-slate-300/80 hover:border-[#7DCF00] bg-white hover:bg-slate-50 text-sm font-bold text-slate-800 transition-all shadow-xs hover:shadow-md"
          >
            <span>Explore All 5,400+ Equipment Listings</span>
            <ArrowRight className="w-4 h-4 text-[#68B000]" />
          </a>
        </div>
      </div>
    </section>
  )
}
