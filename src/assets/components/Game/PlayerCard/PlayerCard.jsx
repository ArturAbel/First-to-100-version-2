import { Player } from "./Player/Player";

import "./PlayerCard.css";

export const PlayerCard = ({
  setPlayerOneScore,
  setPlayerTwoScore,
  setCurrentScore,
  setPlayerOneWin,
  setPlayerTwoWin,
  handleRollDice,
  playerOneScore,
  playerTwoScore,
  currentPlayer,
  currentScore,
  playerOneName,
  playerTwoName,
  setIsRolling,
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
          setOtherPlayerWin={setPlayerTwoWin}
          setPlayerScore={setPlayerOneScore}
          setCurrentScore={setCurrentScore}
          handleRollDice={handleRollDice}
          setPlayerWin={setPlayerOneWin}
          otherPlayerName={playerTwoName}
          playerScore={playerOneScore}
          currentPlayer={currentPlayer}
          playerName={playerOneName}
          currentScore={currentScore}
          setIsRolling={setIsRolling}
          scoreLimit={scoreLimit}
          setPlayer={setPlayer}
          setWinner={setWinner}
          winner={winner}
        />
      ) : (
        <Player
          className="player-two-colors"
          setOtherPlayerWin={setPlayerOneWin}
          setPlayerScore={setPlayerTwoScore}
          setCurrentScore={setCurrentScore}
          handleRollDice={handleRollDice}
          otherPlayerName={playerOneName}
          setPlayerWin={setPlayerTwoWin}
          playerScore={playerTwoScore}
          currentPlayer={currentPlayer}
          currentScore={currentScore}
          setIsRolling={setIsRolling}
          playerName={playerTwoName}
          scoreLimit={scoreLimit}
          setPlayer={setPlayer}
          setWinner={setWinner}
          winner={winner}
        />
      )}
    </div>
  );
};
