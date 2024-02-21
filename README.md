# Tenzies Dice Game 🎲

## Description

Tenzies is a simple, fun dice game built with React. The goal of the game is to roll the dice and get all the dice to show the same number.

## Features

- Roll a set of 10 dice with a single click
- Click on individual dice to hold their value
- Win the game when all dice show the same number
- Celebrate with confetti when you win!

## Installation 🔧

To install the dependencies, run the following command:

```bash
npm install
```

## Usage 📖

To start the game, run the following command:

```bash
npm start
```

Then open http://localhost:3000 to view it in the browser.

## Code Overview 📚

The main component is `App`, which manages the state of the game, including the dice and whether the player has won. It uses the `Die` component to render each die.

The `Die` component takes a `value` prop which represents the value of the die, and an `isHeld` prop which determines whether the die is held. When a die is clicked, it toggles its `isHeld` state.

The game uses the `nanoid` library to generate unique IDs for each die, and the `react-confetti` library to display confetti when the player wins.
