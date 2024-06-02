import { PlayerCard } from "./PlayerCard/PlayerCard";
import { ScoreCards } from "./ScoreCards/ScoreCards";
import { useState } from "react";
import { Dice } from "./Dice/Dice";

import "./Game.css";

export const Game = ({
  setDisplayIntro,
  setPlayerOneWin,
  setPlayerTwoWin,
  setScoreLimit,
  playerOneName,
  playerTwoName,
  playerOneWin,
  playerTwoWin,
  scoreLimit,

}) => {

  const DICE_SIX = 6;

  const [currentPlayer, setPlayer] = useState(playerOneName);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [rightDice, setRightDice] = useState(2);
  const [leftDice, setLeftDice] = useState(1);
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
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        playerOneWin={playerOneWin}
        playerTwoWin={playerTwoWin}
        scoreLimit={scoreLimit}
      />
      <Dice
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setDisplayIntro={setDisplayIntro}
        setScoreLimit={setScoreLimit}
        rightDice={rightDice}
        isRolling={isRolling}
        leftDice={leftDice}
      />
      <PlayerCard
        setPlayerOneScore={setPlayerOneScore}
        setPlayerTwoScore={setPlayerTwoScore}
        setCurrentScore={setCurrentScore}
        setPlayerOneWin={setPlayerOneWin}
        setPlayerTwoWin={setPlayerTwoWin}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        handleRollDice={handleRollDice}
        currentPlayer={currentPlayer}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        currentScore={currentScore}
        setIsRolling={setIsRolling}
        scoreLimit={scoreLimit}
        setWinner={setWinner}
        setPlayer={setPlayer}
        winner={winner}
      />
    </div>
  );
};
