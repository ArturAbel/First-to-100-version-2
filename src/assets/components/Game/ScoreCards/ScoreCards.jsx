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
        className="player-one-colors"
        playerName={playerOneName}
        scoreLimit={scoreLimit}
        playerScore={playerOneScore}
      />
      <Score
        className="player-two-colors"
        playerName={playerTwoName}
        scoreLimit={scoreLimit}
        playerScore={playerTwoScore}
      />
      <div className="player-wins"></div>
    </div>
  );
};
