import { useState } from "react";
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
}) => {
   
  const [currentPlayer, setPlayer] = useState(1);

  return (
    <div className="player-card-container">
      {currentPlayer === 1 ? (
        <Player
          playerScore={playerOneScore}
          playerName={playerOneName}
          setPlayerScore={setPlayerOneScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setPlayer = {setPlayer}
        />
      ) : (
        <Player
          playerScore={playerTwoScore}
          playerName={playerTwoName}
          setPlayerScore={setPlayerTwoScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setPlayer = {setPlayer}
        />
      )}
    </div>
  );
};
