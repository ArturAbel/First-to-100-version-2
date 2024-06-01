import { Player } from "./Player/Player";

import "./PlayerCard.css";

export const PlayerCard = ({
  setPlayerOneScore,
  setPlayerTwoScore,
  setCurrentScore,
  handleRollDice,
  playerOneScore,
  playerTwoScore,
  currentPlayer,
  currentScore,
  playerOneName,
  playerTwoName,
  scoreLimit,
  setWinner,
  setPlayer,
  winner,
}) => {


  return (
    <div className="player-card-container">
      {currentPlayer === playerOneName ? (
        <Player
          className="player-one-colors"
          playerScore={playerOneScore}
          playerName={playerOneName}
          setPlayerScore={setPlayerOneScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setPlayer={setPlayer}
          currentPlayer={currentPlayer}
          handleRollDice={handleRollDice}
          winner={winner}
          setWinner={setWinner}
          otherPlayerName={playerTwoName}
          scoreLimit={scoreLimit}
        />
      ) : (
        <Player
          className="player-two-colors"
          playerScore={playerTwoScore}
          playerName={playerTwoName}
          setPlayerScore={setPlayerTwoScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setPlayer={setPlayer}
          currentPlayer={currentPlayer}
          handleRollDice={handleRollDice}
          winner={winner}
          setWinner={setWinner}
          otherPlayerName={playerOneName}
          scoreLimit={scoreLimit}
        />
      )}
    </div>
  );
};
