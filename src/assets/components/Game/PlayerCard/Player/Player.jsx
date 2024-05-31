import { Button } from "./Button/Button";
import "./Player.css";

export const Player = ({
  playerScore,
  playerName,
  setPlayerScore,
  currentScore,
  setCurrentScore,
  setPlayer
}) => {
  return (

    <div className="player-container">
      <div className="player-card-name">{playerName}</div>
      <h3 className="current-score-title">Current Score</h3>
      <div className="current-score">{currentScore}</div>
      <div className="buttons-container">
        <Button text={"Hold"} />
        <Button text={"Roll"} />
      </div>
    </div>
  );
};
