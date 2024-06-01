import { PlayerCard } from "./PlayerCard/PlayerCard";
import { ScoreCards } from "./ScoreCards/ScoreCards";
import { useState } from "react";
import { Dice } from "./Dice/Dice";

import "./Game.css";

export const Game = ({
  setDisplayIntro,
  setScoreLimit,
  playerOneName,
  playerTwoName,
  scoreLimit,
}) => {

  const DICE_SIX = 6;

  const [currentPlayer, setPlayer] = useState(playerOneName);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [leftDice, setLeftDice] = useState(1);
  const [rightDice, setRightDice] = useState(2);
  const [winner, setWinner] = useState(false);

  const rollDice = () => Math.floor(Math.random() * DICE_SIX) + 1;

  // Rolling the dice
  const handleRollDice = () => {
    const leftRoll = rollDice();
    const rightRoll = rollDice();
    setLeftDice(leftRoll);
    setRightDice(rightRoll);
    setCurrentScore((previousScore) => previousScore + rightRoll + leftRoll);
  };

  return (
    <div className="game-container">
      {winner && <h1 className="winner-announcement">{currentPlayer} Won!</h1>}
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
        leftDice={leftDice}
        rightDice={rightDice}
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
        handleRollDice={handleRollDice}
        scoreLimit={scoreLimit}
        winner={winner}
        setWinner={setWinner}
        currentPlayer={currentPlayer}
        setPlayer={setPlayer}
      />
    </div>
  );
};
