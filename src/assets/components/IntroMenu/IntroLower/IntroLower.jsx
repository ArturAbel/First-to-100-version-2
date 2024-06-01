import { useState } from "react";

import "./IntroLower.css";

export const IntroLower = ({
  setPlayerOneName,
  setPlayerTwoName,
  setDisplayIntro,
  playerOneName,
  playerTwoName,
  setScoreLimit,
  scoreLimit,
}) => {
  const MIN_SCORE = 12;
  const MAX_SCORE = 100;
  const MAX_NAME_LENGTH = 8;

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

  const handleSameName = (playerOneName, playerTwoName) => {
    if (playerOneName === playerTwoName) {
      setPlayerOneName("PLAYER 1");
      setPlayerTwoName("PLAYER 2");
    }
  };

  return (
    <div className="intro-lower">
      <div className="input-names-container">
        <div>
          <span className="input-description">Player 1</span>
          <input
            className="intro-name"
            type="text"
            value={playerOneName}
            maxLength={MAX_NAME_LENGTH}
            placeholder="Name"
            onChange={(e) => {
              setPlayerOneName(e.target.value);
            }}
          />
        </div>
        <div>
          <span className="input-description">Player 2</span>
          <input
            className="intro-name"
            type="text"
            value={playerTwoName}
            maxLength={MAX_NAME_LENGTH}
            placeholder="Name"
            onChange={(e) => {
              setPlayerTwoName(e.target.value);
            }}
          />
        </div>
        <div>
          <span className="input-description">Max score</span>
          <input
            className="intro-score"
            type="number"
            value={scoreLimit}
            min={MIN_SCORE}
            max={MAX_SCORE}
            placeholder={`${MIN_SCORE} to ${MAX_SCORE}`}
            onChange={handleScoreInput}
          />
        </div>
      </div>

      <button
        className="intro-start-button"
        disabled={isDisabled}
        onClick={() => {
          handleSameName(playerOneName, playerTwoName);
          setDisplayIntro(false);
        }}
      >
        Start Game
      </button>
    </div>
  );
};
