import { Score } from "./Score/Score";
import "./ScoreCards.css";

export const ScoreCards = ({
  playerOneName,
  playerTwoName,
  scoreLimit,
  playerOneScore,
  playerTwoScore,
}) => {
  return (
    <div className="scores-container">
      <div className="player-wins"></div>
      <Score
        playerName={playerOneName}
        scoreLimit={scoreLimit}
        playerScore={playerOneScore}
      />
      <Score
        playerName={playerTwoName}
        scoreLimit={scoreLimit}
        playerScore={playerTwoScore}
      />
      <div className="player-wins"></div>
    </div>
  );
};
