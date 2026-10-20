import Navbar from './components/common/Navbar'
import Hero from './components/landing/Hero'
import HowItWorks from './components/landing/HowItWorks'
import TrustSecurity from './components/landing/TrustSecurity'
import CategoriesShowcase from './components/landing/CategoriesShowcase'
import FeaturedGearGrid from './components/landing/FeaturedGearGrid'
import AvailabilityShowcase from './components/landing/AvailabilityShowcase'
import ComparisonMatrix from './components/landing/ComparisonMatrix'
import ListerCalculator from './components/landing/ListerCalculator'
import CircularEconomyImpact from './components/landing/CircularEconomyImpact'
import CommunityStories from './components/landing/CommunityStories'
import FaqSection from './components/landing/FaqSection'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFCF8] text-slate-900 flex flex-col antialiased selection:bg-[#7DCF00]/30 selection:text-slate-900">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <HowItWorks />
        <TrustSecurity />
        <CategoriesShowcase />
        <FeaturedGearGrid />
        <AvailabilityShowcase />
        <ComparisonMatrix />
        <ListerCalculator />
        <CircularEconomyImpact />
        <CommunityStories />
        <FaqSection />
      </main>
    </div>
  )
}

export default App
