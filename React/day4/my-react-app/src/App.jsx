import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>First Counter aap from react vite</h1>
      <div className="card">
        <h1>like {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          like 👍🏿 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Dislike 👎🏿 
        </button>
      </div>
    
    </>
  )
}

export default App
