import { Button } from "./Button/Button";
import { useState } from "react";

import "./Player.css";

export const Player = ({
  playerScore,
  playerName,
  setPlayerScore,
  currentScore,
  setCurrentScore,
  setPlayer,
  handleRollDice,
  currentPlayer,
  scoreLimit,
  setWinner,
  otherPlayerName,
}) => {
  const [holdDisabled, setHoldDisabled] = useState(true);
  const [rollDisabled, setRollDisabled] = useState(false);

  // Roll Button
  const handleRollButton = () => {
    handleRollDice();
    setHoldDisabled(false);
  };



  // NOTE: issue with player score, updated only after on click
  const updatePlayerScore = () => setPlayerScore(playerScore + currentScore);

  


  // Hold Button
  const handleHoldButton = () => {    
    updatePlayerScore();
    checkPlayerScore();
    setPlayer(otherPlayerName);
    setCurrentScore(0);
    setHoldDisabled(true);
  };

  const checkPlayerScore = () => {
    if (playerScore === scoreLimit) {
      setWinner(true);
      setRollDisabled(true);
      currentPlayer = playerName;
    } else if (playerScore > scoreLimit) {
      setWinner(true);
      setRollDisabled(true);
      currentPlayer = otherPlayerName;
    }
  };





  return (
    <div className="player-container">
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
