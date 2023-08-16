import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Player from './components/Player'
import NewGame from './components/NewGame'
import './App.css'
import PlayerAttack from './components/PlayerAttack.jsx'



function App() {

  



  return (
    <>
      <div>
        <header>
          <h1>Color Battle</h1>
          <PlayerAttack />
        </header>
        
      </div>
      <NewGame />
      
    </>
  )
}

export default App
