import { Button } from "./Button/Button";
import { useState } from "react";

import "./Player.css";

export const Player = ({
  otherPlayerName,
  setPlayerScore,
  setCurrentScore,
  handleRollDice,
  currentScore,
  playerScore,
  playerName,
  setPlayer,
  scoreLimit,
  setWinner,
  className,
  setPlayerWin,
  setOtherPlayerWin,
}) => {
  const [holdDisabled, setHoldDisabled] = useState(true);
  const [rollDisabled, setRollDisabled] = useState(false);

  // Roll Button
  const handleRollButton = () => {
    handleRollDice();
    setHoldDisabled(false);
  };

  // Hold Button
  const handleHoldButton = () => {
    const newScore = playerScore + currentScore;
    const endGame = checkPlayerScore(newScore);
    setPlayerScore(newScore);
    if (!endGame) {
      setPlayer(otherPlayerName);
      setCurrentScore(0);
    }
    setHoldDisabled(true);
  };

  const checkPlayerScore = (score) => {
    if (score === scoreLimit) {
      setWinner(true);
      setRollDisabled(true);
      setPlayer(playerName);
      setPlayerWin((previous) => previous + 1);
      return true;
    }

    if (score > scoreLimit) {
      setWinner(true);
      setRollDisabled(true);
      setPlayer(otherPlayerName);
      setOtherPlayerWin((previous) => previous + 1);
      return true;
    }
  };

  return (
    <div className={`player-container ${className}`}>
      <div className="player-card-name">{playerName}</div>
      <h3 className="current-score-title">Current Score</h3>
      <div className="current-score">{currentScore}</div>
      <div className="buttons-container">
        <Button
          text={"Hold"}
          disabled={holdDisabled}
          buttonAction={handleHoldButton}
        />
        <Button
          text={"Roll"}
          disabled={rollDisabled}
          buttonAction={handleRollButton}
        />
      </div>
    </div>
  );
};
