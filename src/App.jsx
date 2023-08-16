import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>Color Battle</h1>
          <h2>Player 1</h2>
        </header>
      </div>
    </>
  )
}

export default App
