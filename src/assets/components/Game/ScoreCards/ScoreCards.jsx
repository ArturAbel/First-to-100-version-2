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
        playerName={playerOneName}
        scoreLimit={scoreLimit}
        playerScore={playerOneScore}
      />
      <Wins playerOneWin={playerOneWin} playerTwoWin={playerTwoWin} />
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
