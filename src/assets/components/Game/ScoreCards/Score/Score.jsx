import "./Score.css";

export const Score = ({ playerName, scoreLimit, playerScore }) => {
  return (
    <div className="score-container">
      <div className="player-name">{playerName}</div>
      <div className="player-score-container">
        <div className="player-score">{playerScore}</div>
        <div className="skew-line"></div>
        <div className="total-score">{scoreLimit}</div>
      </div>
    </div>
  );
};
