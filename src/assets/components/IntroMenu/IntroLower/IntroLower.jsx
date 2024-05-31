import { useState } from "react";
import "./IntroLower.css";

export const IntroLower = ({
  playerOneName,
  setPlayerOneName,
  playerTwoName,
  setPlayerTwoName,
  scoreLimit,
  setScoreLimit,
  setDisplayIntro,
}) => {
  const MIN_SCORE = 12;
  const MAX_SCORE = 100;

  const [isDisabled, setIsDisabled] = useState(true);

  const handleScoreInput = (e) => {
    const scoreInput = parseInt(e.target.value);
    setScoreLimit(scoreInput);
    if (scoreInput >= MIN_SCORE && scoreInput <= MAX_SCORE) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="intro-lower">
      <input
        className="intro-name"
        type="text"
        value={playerOneName}
        placeholder="Player one name"
        onChange={(e) => {
          setPlayerOneName(e.target.value);
        }}
      />
      <input
        className="intro-name"
        type="text"
        value={playerTwoName}
        placeholder="Player two name"
        onChange={(e) => {
          setPlayerTwoName(e.target.value);
        }}
      />
      <input
        className="intro-input"
        type="number"
        value={scoreLimit}
        min={MIN_SCORE}
        max={MAX_SCORE}
        placeholder={`${MIN_SCORE} to ${MAX_SCORE}`}
        onChange={handleScoreInput}
      />
      <button
        className="intro-start-button"
        disabled={isDisabled}
        onClick={() => {
          setDisplayIntro(false);
        }}
      >
        Start Game
      </button>
    </div>
  );
};
