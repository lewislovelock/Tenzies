import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allDiceAreHeld = dice.every(die => die.isHeld)
    const allDiceAreSame = dice.every(die => die.value === dice[0].value)
    if (allDiceAreHeld && allDiceAreSame) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    let dice = []
    for (let i =0 ; i < 10; i++) {
      dice.push(generateNewDie())
    }
    return dice 
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    } else {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
          die : 
          generateNewDie()
      }))
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
    }))
  }

  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}/>
  ))

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        {tenzies ? "好耶! 你赢了!! 🤩" : "掷骰子, 点击骰子, 可将其冻结🥶在当前值, 直到所有骰子都相同🤩。"}
        </p>
      <div className="dice-container">
          {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "🎲"}</button>
      {tenzies && <Confetti />}
    </main>
  )
};
