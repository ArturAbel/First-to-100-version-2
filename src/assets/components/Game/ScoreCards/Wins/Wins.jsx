import { WinContainer } from "./WinContainer/WinContainer";
import "./Wins.css";

export const Wins = ({playerOneWin, playerTwoWin}) => {
  return (
    <div className="wins">
      <span className="wins-title">Wins</span>
      <div className="wins-container">
        <WinContainer className="player-one-colors" playerWin ={playerOneWin}/>
        <WinContainer className="player-two-colors" playerWin ={playerTwoWin}/>
      </div>
    </div>
  );
};
