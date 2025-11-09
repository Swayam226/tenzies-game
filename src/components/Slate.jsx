import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Slate() {
  const [dice, setDice] = useState(generatediceNumber());

  function generatediceNumber() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice(generatediceNumber);
  }

  const dieElements = dice.map((DieObj) => (
    <Die key={DieObj.id} value={DieObj.value} held={DieObj.isHeld} />
  ));

  return (
    <div className="flex flex-col items-center justify-center rounded-4xl w-[70%]  h-[80%] bg-white">
      <section className="w-full h-105 grid grid-cols-5 grid-rows-2 place-items-center gap-8 pl-20 pr-20 pb-10">
        {dieElements}
      </section>
      <section className=" h-20 w-150 flex justify-center items-center">
        <button
          onClick={rollDice}
          className="rounded-xl w-35 h-15 hover:shadow-2xl hover:scale-105 transition transform bg-blue-500 text-xl font-semibold text-white"
        >
          Roll Dice
        </button>
      </section>
    </div>
  );
}
