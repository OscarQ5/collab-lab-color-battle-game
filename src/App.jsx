import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  const [player1HitPoints, setPlayer1HitPoints] = useState(10)
  const [player2HitPoints, setPlayer2HitPoints] = useState(10)
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(null)
  const [diceRoll, setDiceRoll] = useState(null)

  const handleAttack = () => {
    if (winner) return

    const roll = Math.floor(Math.random() * 6) + 1
    setDiceRoll(roll)
    const updatedOpponentHitPoint = currentPlayer === 1 ? player2HitPoints - roll : player1HitPoints - roll

    if (currentPlayer === 1) {
      setPlayer2HitPoints(updatedOpponentHitPoint)
    } else {
      setPlayer1HitPoints(updatedOpponentHitPoint)
    }

    if (updatedOpponentHitPoint <= 0) {
      setWinner(currentPlayer)
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    }
  }

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

          <p>Dice Roll: {diceRoll}</p>

          {!winner ? (
            <div>
              <Player name="Player 1" hitPoints={player1HitPoints} attack={handleAttack} currentPlayer={currentPlayer === 1} />
              <Player name="Player 2" hitPoints={player2HitPoints} attack={handleAttack} currentPlayer={currentPlayer === 2} />
            </div>
          ) : (
            <div>
              <button onClick={handleNewGame}>New Game?</button>
            </div>
          )}
        </header>
      </div>
    </>
  )
}

export default App
