import { nanoid } from 'nanoid';
import './App.css';
import { Dice } from './components/Dice';
import { createRandomNumbers } from './lib';
import { useState } from 'react';
import Confetti from 'react-confetti';

const generateAllNewDices = (amount) =>
  createRandomNumbers(amount).map((value) => ({
    id: nanoid(),
    value,
    isHeld: false,
  }));

function App() {
  const [diceValues, setDiceValues] = useState(() => generateAllNewDices(10));

  const gameWon = diceValues.every(
    (dice) => dice.isHeld && dice.value === diceValues[0].value,
  );

  const holdDie = (id) => {
    setDiceValues((diceValues) =>
      diceValues.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  };

  const rollDice = () => {
    setDiceValues((diceValues) =>
      diceValues.map((die) => {
        if (die.isHeld) return die;
        return { ...die, value: Math.ceil(Math.random() * 6) };
      }),
    );
  };

  const resetGame = () => {
    setDiceValues(generateAllNewDices(10));
  };

  return (
    <div className="h-svh bg-[#0B2434] p-6 flex flex-col justify-center items-center">
      <section className="bg-[#F5F5F5] space-y-2 flex flex-col p-4 text-center rounded-xl w-full max-w-[32rem] aspect-square">
        <h1 className="text-4xl font-bold">Tenzies</h1>
        <p className="">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5 my-auto grid-rows-2 justify-items-center items-center gap-4">
          {diceValues.map(({ id, value, isHeld }, i) => (
            <Dice
              key={i}
              value={value}
              isHeld={isHeld}
              id={id}
              onClick={holdDie}
            />
          ))}
        </div>
        <button
          className="py-2 px-4 bg-blue-600 rounded-md text-white text-xl w-full max-w-40 mx-auto cursor-pointer"
          onMouseDown={() => (gameWon ? resetGame() : rollDice())}
        >
          {gameWon ? 'Play again' : 'Roll'}
        </button>
        {gameWon && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
        )}
      </section>
    </div>
  );
}

export default App;
