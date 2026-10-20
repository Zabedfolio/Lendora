import { useState } from 'react'
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react'

export default function AvailabilityShowcase() {
  const [selectedRange, setSelectedRange] = useState({ start: 22, end: 25 })
  const dailyRate = 95
  const serviceFeePercent = 5

  // Mock days in October (28 days displayed)
  // 18-20 are booked by another renter
  // 14 is blocked by owner for maintenance
  const bookedDays = [18, 19, 20]
  const maintenanceDays = [14]

  const totalDays = selectedRange.end - selectedRange.start + 1
  const subtotal = totalDays * dailyRate
  const serviceFee = Number(((subtotal * serviceFeePercent) / 100).toFixed(2))
  const totalPrice = Number((subtotal + serviceFee).toFixed(2))

  const handleDayClick = (day) => {
    if (bookedDays.includes(day) || maintenanceDays.includes(day)) return
    if (day < 10) return

    if (day > selectedRange.start) {
      // Check if any booked day falls between start and day
      const hasConflict = bookedDays.some(
        (bd) => bd >= selectedRange.start && bd <= day
      )
      if (!hasConflict) {
        setSelectedRange({ ...selectedRange, end: day })
      } else {
        setSelectedRange({ start: day, end: day })
      }
    } else {
      setSelectedRange({ start: day, end: Math.max(day, day + 2) })
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FAFCF8] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#68B000]" />
            Real-Time Availability & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Zero Double-Bookings. Guaranteed.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Pick your rental dates on our live interactive calendar. Our smart scheduling automatically prevents reservation conflicts so your gear is 100% reserved and ready when your project begins.
          </p>
        </div>

        {/* Interactive Calendar Showcase Widget */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Top Status Header */}
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-xs border-b border-slate-800">
            <div className="flex items-center gap-2.5 text-white font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7DCF00] animate-pulse" />
              <span className="font-semibold text-slate-200">
                Live Rental Schedule
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hidden sm:inline">
                Instant Reservation Protection
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[#7DCF00] text-xs font-bold bg-[#7DCF00]/10 px-3 py-1 rounded-full border border-[#7DCF00]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conflict-Free Booking</span>
            </div>
          </div>

          {/* Interactive Showcase Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Left: Interactive Calendar Range Picker */}
            <div className="lg:col-span-7 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    October 2026 Reservation Calendar
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click available dates to test real-time schedule selection
                  </p>
                </div>

                <span className="text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                  Sony FX3 Cinema Rig
                </span>
              </div>

              {/* Calendar Grid (Days 4 to 31) */}
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold mb-6">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="text-slate-400 text-[11px] font-bold uppercase py-1">
                    {d}
                  </span>
                ))}

                {Array.from({ length: 28 }, (_, i) => i + 4).map((day) => {
                  const isBooked = bookedDays.includes(day)
                  const isMaintenance = maintenanceDays.includes(day)
                  const isSelected =
                    day >= selectedRange.start && day <= selectedRange.end

                  let btnStyle =
                    'bg-slate-50 text-slate-700 hover:bg-[#F2FCE2] hover:text-[#3B6600]'

                  if (isBooked) {
                    btnStyle =
                      'bg-rose-50 text-rose-500 line-through cursor-not-allowed border border-rose-200/60'
                  } else if (isMaintenance) {
                    btnStyle =
                      'bg-amber-50 text-amber-600 line-through cursor-not-allowed border border-amber-200/60'
                  } else if (isSelected) {
                    btnStyle =
                      'bg-[#7DCF00] text-slate-950 font-extrabold shadow-sm scale-105 z-10'
                  }

                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={isBooked || isMaintenance}
                      onClick={() => handleDayClick(day)}
                      className={`h-10 rounded-xl transition-all duration-200 flex flex-col items-center justify-center relative font-mono text-xs ${btnStyle}`}
                    >
                      <span>{day}</span>
                      {isSelected && (
                        <span className="w-1 h-1 rounded-full bg-slate-950 mt-0.5" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-[#7DCF00]" />
                  Selected Range (Inclusive)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-rose-100 border border-rose-300" />
                  Reserved by Another Renter
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-300" />
                  Owner Maintenance
                </span>
              </div>
            </div>

            {/* Right: Transparent Price Breakdown */}
            <div className="lg:col-span-5 p-7 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Rental Price Summary
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#457300] bg-[#F2FCE2] px-2 py-0.5 rounded-full border border-[#7DCF00]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#68B000]" />
                    Dates Available
                  </span>
                </div>

                <div className="space-y-3 text-sm pt-2">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Daily Rate</span>
                    <span className="font-semibold text-slate-900">${dailyRate}.00 / day</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Rental Duration</span>
                    <span className="font-semibold text-slate-900 font-mono">
                      {totalDays} days ({selectedRange.start}–{selectedRange.end} Oct)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Gear Subtotal</span>
                    <span className="font-semibold text-slate-900 font-mono">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1">
                      Protection & Service Fee (5%)
                    </span>
                    <span className="font-semibold text-slate-900 font-mono">
                      ${serviceFee.toFixed(2)}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-base font-extrabold text-slate-900">
                        Total Price
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Transparent upfront rate • No hidden fees
                      </div>
                    </div>
                    <div className="text-2xl font-black text-slate-950 font-mono">
                      ${totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Consumer Trust Card (Replaces Code Box) */}
                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#68B000]" />
                    <span>Lendora Guarantee Included</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Selected dates are locked immediately upon host confirmation. All deposits remain protected in escrow until you inspect your gear.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="/items"
                  className="btn-primary-glow w-full py-3 rounded-xl text-center text-xs font-bold text-slate-950 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Browse Gear & Book Dates</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
