import { useState } from 'react'
import { Search, MapPin, SlidersHorizontal, ArrowRight } from 'lucide-react'

export default function RentalSearchBar() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')

  const categories = [
    'All Categories',
    'Cameras & Photography',
    'Power Tools & DIY',
    'Audio & DJ Equipment',
    'Drones & Action Cams',
    'Party & Event Gear',
    'Outdoor & Camping',
    'High-End Fashion'
  ]

  const trendingTags = [
    'Sony FX3 Cinema',
    'DJI Mavic 3 Pro',
    'DeWalt Cordless Drill',
    'Pioneer DJ Set',
    '4K Laser Projector'
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (keyword) params.append('q', keyword)
    if (category && category !== 'All Categories') params.append('category', category)
    if (location) params.append('location', location)
    window.location.href = `/items?${params.toString()}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Seamless Unified Search Bar — No Cluttered Nested Borders */}
      <div className="bg-white rounded-2xl md:rounded-full border border-slate-200/90 shadow-[0_12px_40px_-6px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.12)] p-2 md:p-2 md:pl-7">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
          
          {/* Segment 1: Keyword Search */}
          <div className="flex-1 flex items-center gap-3 py-2 px-3 md:px-0 md:pr-4 group">
            <Search className="w-5 h-5 text-slate-400 group-focus-within:text-[#68B000] shrink-0 transition-colors" />
            <div className="w-full text-left">
              <label htmlFor="search-gear" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 group-focus-within:text-[#558C00] transition-colors">
                What are you renting?
              </label>
              <input
                id="search-gear"
                type="text"
                placeholder="e.g. Sony A7 IV, Drone, Power Drill..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Clean Vertical Divider (Desktop) */}
          <div className="hidden md:block h-9 w-px bg-slate-200/90 shrink-0" />

          {/* Segment 2: Category Dropdown */}
          <div className="w-full md:w-56 flex items-center gap-2.5 py-2 px-3 md:px-5 group cursor-pointer">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 group-focus-within:text-[#68B000] shrink-0 transition-colors" />
            <div className="w-full text-left">
              <label htmlFor="search-cat" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 group-focus-within:text-[#558C00] transition-colors">
                Category
              </label>
              <select
                id="search-cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer pr-4"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clean Vertical Divider (Desktop) */}
          <div className="hidden md:block h-9 w-px bg-slate-200/90 shrink-0" />

          {/* Segment 3: Location */}
          <div className="w-full md:w-48 flex items-center gap-2.5 py-2 px-3 md:px-5 group">
            <MapPin className="w-4 h-4 text-slate-400 group-focus-within:text-[#68B000] shrink-0 transition-colors" />
            <div className="w-full text-left">
              <label htmlFor="search-loc" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 group-focus-within:text-[#558C00] transition-colors">
                Location
              </label>
              <input
                id="search-loc"
                type="text"
                placeholder="City or zip"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Search Button with lighting glow */}
          <button
            type="submit"
            className="btn-primary-glow w-full md:w-auto px-7 py-3 md:py-3.5 rounded-xl md:rounded-full flex items-center justify-center gap-2 text-sm font-bold text-slate-950 shrink-0 cursor-pointer shadow-md"
          >
            <span>Search</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>
      </div>

      {/* Clean Minimalist Trending Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
        <span className="font-semibold text-slate-400">Popular:</span>
        {trendingTags.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setKeyword(tag)}
            className="px-3 py-1 rounded-full bg-slate-100/80 hover:bg-[#F2FCE2] text-slate-600 hover:text-[#457300] transition-colors font-medium cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
