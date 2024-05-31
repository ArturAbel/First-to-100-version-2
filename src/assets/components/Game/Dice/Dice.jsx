import { DiceCube } from "./DiceCube/DiceCube";

import "./Dice.css";

export const Dice = ({
  setDisplayIntro,
  setScoreLimit,
  leftDice,
  RightDice,
}) => {
  const handleDisplayIntro = () => {
    setScoreLimit();
    setDisplayIntro(true);
  };

  const randomKey = () => {
    return Math.random();
  };

  return (
    <div className="dice-container">
      <DiceCube key={randomKey} diceSide={leftDice} />
      <DiceCube diceSide={RightDice} />
      <button className="new-game-button" onClick={handleDisplayIntro}>
        New Game
      </button>
    </div>
  );
};