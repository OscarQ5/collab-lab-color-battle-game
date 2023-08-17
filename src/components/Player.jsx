import React from 'react'

const Player = ({ attack, name, hitPoints, currentPlayer }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Hitpoints: {hitPoints}</p>
      {currentPlayer && <button onClick={attack}>Attack!</button>}
    </div>
  )
}

export default Player