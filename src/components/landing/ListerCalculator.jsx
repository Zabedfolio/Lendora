import { useState } from 'react'
import {
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Sliders
} from 'lucide-react'

export default function ListerCalculator() {
  const gearPresets = [
    { label: 'Cinema Camera', defaultRate: 85, defaultDays: 7 },
    { label: 'Pro Drone', defaultRate: 65, defaultDays: 6 },
    { label: 'Power Tool Kit', defaultRate: 30, defaultDays: 8 },
    { label: 'DJ Audio Console', defaultRate: 80, defaultDays: 5 },
    { label: 'Camping Roof Tent', defaultRate: 45, defaultDays: 6 }
  ]

  const [selectedGear, setSelectedGear] = useState(gearPresets[0])
  const [dailyRate, setDailyRate] = useState(gearPresets[0].defaultRate)
  const [daysPerMonth, setDaysPerMonth] = useState(gearPresets[0].defaultDays)

  const handlePresetChange = (preset) => {
    setSelectedGear(preset)
    setDailyRate(preset.defaultRate)
    setDaysPerMonth(preset.defaultDays)
  }

  const grossMonthly = dailyRate * daysPerMonth
  const platformFee = Math.round(grossMonthly * 0.05) // 5% per AGENTS.md
  const netMonthly = grossMonthly - platformFee
  const netAnnual = netMonthly * 12

  return (
    <section id="lister" className="py-20 lg:py-28 bg-[#FAFCF8] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context & Value Props */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-[#68B000]" />
              Monetize Your Assets
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Turn Idle Equipment Into Passive Income
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Your camera lenses, power drills, and DJ gear don’t need to collect dust. Lend them to verified neighbors and earn hundreds every month with full $10k damage coverage.
            </p>

            {/* Value bullets */}
            <div className="space-y-3.5 text-sm font-semibold text-slate-700 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#7DCF00]/20 text-[#457300] flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>Keep 95% of every rental dollar (lowest platform fee in P2P)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#7DCF00]/20 text-[#457300] flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>$10,000 item protection guarantee automatically applied</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#7DCF00]/20 text-[#457300] flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>You control rental dates and approve who borrows your gear</span>
              </div>
            </div>

            <a
              href="/items/new"
              className="btn-primary-glow px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 inline-flex items-center gap-2"
            >
              <span>List Your First Item Free</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Right Column: Interactive Earnings Slider Calculator */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(15,23,42,0.08)]">
              {/* Calculator Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Live Earnings Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Adjust the sliders below to estimate your potential returns
                  </p>
                </div>

                <span className="text-xs font-bold text-[#457300] bg-[#F2FCE2] px-3 py-1 rounded-full border border-[#7DCF00]/30">
                  95% Payout Rate
                </span>
              </div>

              {/* Gear Presets Quick Switcher */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Select Common Gear Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {gearPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePresetChange(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedGear.label === preset.label
                          ? 'bg-slate-950 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders Area */}
              <div className="space-y-6 mb-8">
                {/* Daily Price Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-slate-700">Estimated Daily Rental Price</span>
                    <span className="text-lg font-black text-slate-950 font-mono">
                      ${dailyRate}
                      <span className="text-xs font-normal text-slate-400">/day</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    step="5"
                    value={dailyRate}
                    onChange={(e) => setDailyRate(Number(e.target.value))}
                    className="w-full accent-[#7DCF00] h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                    <span>$15/day</span>
                    <span>$100/day</span>
                    <span>$200/day</span>
                  </div>
                </div>

                {/* Days Rented Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-slate-700">Days Rented Per Month</span>
                    <span className="text-lg font-black text-slate-950 font-mono">
                      {daysPerMonth}
                      <span className="text-xs font-normal text-slate-400"> days/mo</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="1"
                    value={daysPerMonth}
                    onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                    className="w-full accent-[#7DCF00] h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                    <span>2 days (weekend)</span>
                    <span>10 days</span>
                    <span>20 days</span>
                  </div>
                </div>
              </div>

              {/* Real-Time Estimated Earnings Output Box */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <div className="text-[11px] font-bold text-[#7DCF00] uppercase tracking-wider mb-1">
                      Estimated Net Monthly Earnings
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                      ${netMonthly.toLocaleString()}
                      <span className="text-xs font-semibold text-slate-400">/mo</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Gross: ${grossMonthly} • Platform fee: ${platformFee} (5%)
                    </div>
                  </div>

                  <div className="sm:border-l sm:border-slate-800 sm:pl-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Projected Annual Payout
                    </div>
                    <div className="text-2xl font-extrabold text-[#7DCF00] font-mono">
                      ${netAnnual.toLocaleString()}
                      <span className="text-xs font-semibold text-slate-400">/yr</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Straight into your bank account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
