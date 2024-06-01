import "./WinContainer.css";

export const WinContainer = ({className, playerWin}) => {
  return (
    <div className={`win-container ${className}`}>
      <div className="win-score">{playerWin}</div>
    </div>
  );
};
