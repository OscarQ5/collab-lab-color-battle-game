import React from 'react'
import { useEffect } from 'react'

function NewGame({ winner }) {
  const handleNewGame = () => {
    location.reload()
  }

  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} wins!`)
    }
  }, [winner])

  return (
    <div>
      <button onClick={handleNewGame}>New Game?</button>
    </div>
  )
}

export default NewGame

