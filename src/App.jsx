import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Lendora Frontend</h1>
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-medium cursor-pointer"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
