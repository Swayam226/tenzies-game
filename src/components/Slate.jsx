import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Slate() {
  const [dice, setDice] = useState(generateallnewDice());

  function generateallnewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  // adding game winning condition
  // using array method called every

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function rollDice() {
    if (!gameWon) {
      setDice((prev) => {
        return prev.map((die) => {
          if (die.isHeld == true) {
            return die;
          } else {
            return { ...die, value: Math.ceil(Math.random() * 6) };
          }
        });
      });
    } else {
      setDice(generateallnewDice);
    }
  }

  function hold(id) {
    setDice((prev) => {
      return prev.map((die) => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
      });
    });
    console.log(id);
  }

  const dieElements = dice.map((DieObj) => (
    <Die
      key={DieObj.id}
      value={DieObj.value}
      held={DieObj.isHeld}
      hold={() => hold(DieObj.id)} // closed fn used closures
    />
  ));

  return (
    <div className="flex flex-col items-center justify-center rounded-4xl w-[70%]  h-[80%] bg-white">
      {gameWon && <Confetti tweenDuration={50} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congrats! You won, press New Game to start a new game</p>
        )}
      </div>
      <p className="text-gray-500 w-95 text-center pt-7 text-md">
        <span className="font-bold">How to Play:</span> Roll until all dice are
        the same. Click each die to freeze it at its current value between
        rolls.
      </p>
      <section className="w-full h-105 grid grid-cols-5 grid-rows-2 place-items-center pl-20 pr-20 pb-12">
        {dieElements}
      </section>
      <section className=" h-20 w-150 flex justify-center items-center pb-18">
        <button
          onClick={rollDice}
          className="rounded-xl w-35 h-15 hover:shadow-2xl hover:scale-105 transition transform bg-blue-500 text-xl font-semibold text-white"
        >
          {gameWon ? "New Game" : "Roll Dice"}
        </button>
      </section>
    </div>
  );
}
