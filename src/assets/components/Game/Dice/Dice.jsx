import { DiceCube } from "./DiceCube/DiceCube";

import "./Dice.css";

export const Dice = ({
  setDisplayIntro,
  setScoreLimit,
  isRolling,
  rightDice,
  leftDice,
}) => {

  const handleDisplayIntro = () => {
    setScoreLimit();
    setDisplayIntro(true);
  };


  return (
    <div className="dice-container">
      <DiceCube diceSide={leftDice} isRolling={isRolling}/>
      <DiceCube diceSide={rightDice} isRolling={isRolling}/>
      <button className="new-game-button" onClick={handleDisplayIntro}>
        New Game
      </button>
    </div>
  );
};
