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
    // Multi-page navigation to /items with filters
    window.location.href = `/items?${params.toString()}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Container — Restored original curve (rounded-2xl sm:rounded-3xl) without inner box borders */}
      <div className="bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.08),0_0_20px_rgba(125,207,0,0.12)]">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch md:items-center">
          {/* Keyword Search Field */}
          <div className="flex-1 flex items-center gap-3.5 px-4 sm:px-5 py-2.5 rounded-xl hover:bg-slate-50/90 focus-within:bg-slate-50/90 transition-colors">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <div className="w-full text-left">
              <label htmlFor="search-gear" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                What are you renting?
              </label>
              <input
                id="search-gear"
                type="text"
                placeholder="e.g. Sony A7 IV, Drone, Power Drill..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
              />
            </div>
          </div>

          {/* Hairline Divider */}
          <div className="hidden md:block h-8 w-px bg-slate-200 shrink-0 mx-1" />

          {/* Category Dropdown Field */}
          <div className="w-full md:w-52 flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-xl hover:bg-slate-50/90 focus-within:bg-slate-50/90 transition-colors">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="w-full text-left">
              <label htmlFor="search-cat" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Category
              </label>
              <select
                id="search-cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hairline Divider */}
          <div className="hidden md:block h-8 w-px bg-slate-200 shrink-0 mx-1" />

          {/* Location Field */}
          <div className="w-full md:w-48 flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-xl hover:bg-slate-50/90 focus-within:bg-slate-50/90 transition-colors">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="w-full text-left">
              <label htmlFor="search-loc" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Location
              </label>
              <input
                id="search-loc"
                type="text"
                placeholder="City or zip"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
              />
            </div>
          </div>

          {/* Search Button with original curve */}
          <div className="p-1 shrink-0">
            <button
              type="submit"
              className="btn-primary-glow w-full md:w-auto px-6 py-3 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </form>
      </div>

      {/* Popular Search Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
        <span className="font-semibold text-slate-400">Popular nearby:</span>
        {trendingTags.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setKeyword(tag)}
            className="px-3 py-1 rounded-full bg-white/90 hover:bg-[#F2FCE2] text-slate-600 hover:text-[#4D8000] border border-slate-200 hover:border-[#7DCF00]/40 transition-all font-medium cursor-pointer shadow-2xs"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
