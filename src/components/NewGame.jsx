import React from 'react'

function NewGame({ handleNewGame }) {
  return (
    <div>
      <button onClick={handleNewGame}>New Game?</button>
    </div>
  )
}

export default NewGame

