import { PlayerCard } from "./PlayerCard/PlayerCard";
import { ScoreCards } from "./ScoreCards/ScoreCards";
import { useState } from "react";
import { Dice } from "./Dice/Dice";

import "./Game.css";

export const Game = ({
  playerOneName,
  playerTwoName,
  scoreLimit,
  setDisplayIntro,
  setScoreLimit
}) => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="game-container">
      <ScoreCards
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        scoreLimit={scoreLimit}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <Dice
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setDisplayIntro={setDisplayIntro}
        setScoreLimit={setScoreLimit}
      />
      <PlayerCard
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        setPlayerOneScore={setPlayerOneScore}
        setPlayerTwoScore={setPlayerTwoScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
      />
    </div>
  );
};
