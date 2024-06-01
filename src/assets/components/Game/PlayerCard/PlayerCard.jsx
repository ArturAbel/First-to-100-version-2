import "./PlayerCard.css";
import { Player } from "./Player/Player";

export const PlayerCard = ({
  playerOneScore,
  playerTwoScore,
  setPlayerOneScore,
  setPlayerTwoScore,
  currentScore,
  setCurrentScore,
  playerOneName,
  playerTwoName,
  handleRollDice,
  setWinner,
  winner,
  setPlayer,
  currentPlayer,
  scoreLimit,
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
