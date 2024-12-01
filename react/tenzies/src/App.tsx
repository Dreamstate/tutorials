import { useEffect, useRef, useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

type DieObj = {
  id: string
  value: number
  isHeld: boolean
}

export default function App() {
  // having an arrow function to run the function makes it only run once
  // lazy initialization
  const [dice, setDice] = useState<DieObj[]>(() => generateAllNewDice())
  const buttonRef = useRef<HTMLButtonElement>(null)

  const gameWon = dice.every(die => die.isHeld) && 
        dice.every(die => die.value === dice[0].value)

  function generateAllNewDice(): DieObj[] {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false}))
  }

  function holdDie(id: string) {
    setDice(prevDice => prevDice.map(die =>
       die.id === id ? 
       {...die, isHeld: !die.isHeld} : die
      ))
  }

  const diceElements = dice.map(die => <Die 
    key={die.id} 
    id={die.id} 
    value={die.value} 
    isHeld={die.isHeld} 
    holdDie={holdDie} 
    />) 

  function rollDice() {
    setDice(prevDice => prevDice.map(die =>
      die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
    ))
  }

  function resetGame() {
    setDice(generateAllNewDice())
  }

  useEffect(() => {
    if (gameWon) {
      buttonRef.current?.focus()
    }
  }
  , [gameWon])

  return (
    <main>
      <div aria-live='polite' className='sr-only'>
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll untill all dice are the same. Click each die to freeze
        it at its current value between rolls.
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      {<button ref={buttonRef} className="roll-dice" onClick={gameWon ? resetGame : rollDice}>
        {gameWon ? "New Game" : "Roll"}
        </button>}
    </main>
  )
}
