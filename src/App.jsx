import Navbar from './components/common/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Welcome to Lendora</h1>
        <p className="text-slate-400 max-w-md">
          Peer-to-peer lending and rental platform. Frontend environment ready.
        </p>
      </main>
    </div>
  )
}

export default App
