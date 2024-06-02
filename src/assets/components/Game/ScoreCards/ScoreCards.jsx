import { Score } from "./Score/Score";
import { Wins } from "./Wins/Wins";

import "./ScoreCards.css";

export const ScoreCards = ({
  playerOneScore,
  playerTwoScore,
  playerOneName,
  playerTwoName,
  playerOneWin,
  playerTwoWin,
  scoreLimit,
}) => {
  return (
    <div className="scores-container">
      <Score
        className="player-one-colors"
        playerScore={playerOneScore}
        playerName={playerOneName}
        scoreLimit={scoreLimit}
      />
      <Wins playerOneWin={playerOneWin} playerTwoWin={playerTwoWin} />
      <Score
        className="player-two-colors"
        playerScore={playerTwoScore}
        playerName={playerTwoName}
        scoreLimit={scoreLimit}
      />
      <div className="player-wins"></div>
    </div>
  );
};
