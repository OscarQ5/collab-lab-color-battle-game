import React from 'react'
import Player from "./Player.jsx"
import NewGame from "./NewGame.jsx"

function PlayerAttack() {
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

    return (
        <div>
            <p>Dice Roll: {diceRoll}</p>
            {!winner ? (
                <div>
                    <Player name="Player 1" hitPoints={player1HitPoints} attack={handleAttack} currentPlayer={currentPlayer === 1} />
                    <Player name="Player 2" hitPoints={player2HitPoints} attack={handleAttack} currentPlayer={currentPlayer === 2} />
                </div>
            ) : (
                <div>
                    <NewGame winner={winner}/>
                </div>
            )}

        </div>
    )
}

export default PlayerAttack