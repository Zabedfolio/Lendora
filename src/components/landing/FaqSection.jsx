import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Calendar, DollarSign, UserCheck } from 'lucide-react'

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [openId, setOpenId] = useState(0)

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'renting', label: 'Renting & Dates' },
    { id: 'listing', label: 'Listing & Payouts' },
    { id: 'trust', label: 'Trust & Safety' }
  ]

  const faqs = [
    {
      id: 0,
      category: 'renting',
      icon: Calendar,
      question: 'How does Lendora prevent double-booking on overlapping dates?',
      answer:
        'Lendora features a proprietary Availability Engine running on PostgreSQL. Every date range query checks inclusive overlap (existing.start <= requested.end AND existing.end >= requested.start). When a host confirms a booking, the system executes an ACID transaction with row-level locking (SELECT ... FOR UPDATE) to guarantee that conflicting requests are blocked simultaneously.'
    },
    {
      id: 1,
      category: 'trust',
      icon: ShieldCheck,
      question: 'What happens if borrowed equipment is damaged or returned late?',
      answer:
        'Every booking is protected by the Lendora Community Shield, including our $10,000 Lender Protection Guarantee. Security deposits are held securely in escrow until safe return. If gear is damaged or returned late, either party can initiate a dispute. Our dedicated resolution team inspects verified hand-off condition photos and issues reimbursement within 48 hours.'
    },
    {
      id: 2,
      category: 'listing',
      icon: DollarSign,
      question: 'How are rental prices, service fees, and host payouts calculated?',
      answer:
        'Pricing is 100% server-authoritative. The formula calculates total inclusive days: (end_date - start_date) + 1. The subtotal is total_days × daily_rate. A modest 5% service fee is added to support payment processing and escrow protection. Listers keep 95% of the rental earnings with zero hidden listing or subscription fees.'
    },
    {
      id: 3,
      category: 'listing',
      icon: UserCheck,
      question: 'How does user role progression work between Renters and Listers?',
      answer:
        'All new accounts register as verified Renters. Once you publish your very first equipment listing, our system automatically upgrades your account to a dual-role Lister. You retain complete freedom to both rent gear from your neighborhood and host your own gear seamlessly from a single unified profile.'
    },
    {
      id: 4,
      category: 'renting',
      icon: HelpCircle,
      question: 'Can I cancel a booking and receive a full refund?',
      answer:
        'Yes. If a booking is still in "pending" status, you can cancel instantly with zero penalty. Once confirmed by the host, full refunds are honored up until 24 hours prior to the start date. This guarantees fairness to hosts who reserved inventory for your project.'
    },
    {
      id: 5,
      category: 'trust',
      icon: ShieldCheck,
      question: 'Why can reviews only be submitted after a completed booking?',
      answer:
        'Unlike open review platforms prone to bot spam and competitor tampering, Lendora strictly enforces a verified booking state machine. A review can only be submitted once a booking reaches the "completed" status in the database. Every rating represents an authentic, verified exchange.'
    }
  ]

  const filteredFaqs =
    activeTab === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab)

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2FCE2] border border-[#7DCF00]/30 text-[#4D8000] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#68B000]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Everything you need to know about date range availability, security escrow, and listing requirements.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id
            const IconComponent = faq.icon

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAFCF8] border-[#7DCF00]/50 shadow-[0_4px_20px_rgba(125,207,0,0.08)]'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#7DCF00] text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#F2FCE2] text-[#457300] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 sm:pl-[70px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#7DCF00]/20 border border-[#7DCF00]/30 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <HelpCircle className="w-6 h-6 text-[#7DCF00]" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                Have a question not listed here?
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Our support team and gear coordinators are available 24/7 to assist.
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4 text-slate-700" />
          </a>
        </div>
      </div>
    </section>
  )
}
