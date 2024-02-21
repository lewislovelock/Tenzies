import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    let dice = []
    for (let i =0 ; i < 10; i++) {
      dice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      })
    }
    return dice 
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} />
  ))

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className='roll-dice' 
        onClick={() => setDice(allNewDice())}
      >
        Roll
      </button>
    </main>
  )
};

export default App;
