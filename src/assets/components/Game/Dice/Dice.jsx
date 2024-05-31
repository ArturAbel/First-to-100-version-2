import { DiceCube } from "./DiceCube/DiceCube";

import "./Dice.css";

export const Dice = ({
  currentScore,
  setCurrentScore,
  setDisplayIntro,
  setScoreLimit,
}) => {
  const handleDisplayIntro = () => {
    setScoreLimit();
    setDisplayIntro(true);
  };

  return (
    <div className="dice-container">
      <DiceCube />
      <DiceCube />
      <button className="new-game-button" onClick={handleDisplayIntro}>
        New Game
      </button>
    </div>
  );
};
