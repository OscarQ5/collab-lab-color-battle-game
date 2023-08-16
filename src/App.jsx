import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerAttack from './components/PlayerAttack.jsx'

const Player = ({ attack, name, hitPoints, currentPlayer }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Hitpoints: {hitPoints}</p>
      {currentPlayer && <button onClick={attack}>Attack!</button>}
    </div>
  )
}

function App() {

  const handleNewGame = () => {
    location.reload()
  }

  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} wins!`)
    }
  }, [winner])



  return (
    <>
      <div>
        <header>
          <h1>Color Battle</h1>
          <PlayerAttack />
        </header>
      </div>
    </>
  )
}

export default App
