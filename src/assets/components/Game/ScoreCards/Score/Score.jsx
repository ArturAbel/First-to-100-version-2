import "./Score.css";

export const Score = ({ playerName, scoreLimit, playerScore, className }) => {
  return (
    <div className={`score-container ${className}`}>
      <div className="player-name">{playerName}</div>
      <div className="player-score-container">
        <div className="player-score">{playerScore}</div>
        <div className={`skew-line ${className}`}></div>
        <div className="total-score">{scoreLimit}</div>
      </div>
    </div>
  );
};
