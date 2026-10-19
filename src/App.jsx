import Navbar from './components/common/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFCF8] text-slate-900 flex flex-col antialiased selection:bg-[#7DCF00]/30 selection:text-slate-900">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Sections will be mounted here as each phase completes */}
      </main>
    </div>
  )
}

export default App
