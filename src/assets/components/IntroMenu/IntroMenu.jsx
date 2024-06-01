import { IntroLower } from "./IntroLower/IntroLower";
import "./IntroMenu.css";

export const IntroMenu = ({
  playerOneName,
  setPlayerOneName,
  playerTwoName,
  setPlayerTwoName,
  scoreLimit,
  setScoreLimit,
  displayIntro,
  setDisplayIntro,
}) => {
  return (
    <>
      { displayIntro && 
        <div className="intro">
          <div className="intro-upper">
            <h1 className="intro-title">Dice Clash</h1>
            <p className="intro-subtitle">
              <strong>Objective:</strong>
            </p>
            <p>
              The objective is to reach the exact number of points without
              exceeding it. The player who goes over loses!
            </p>
            <br />
            <p className="intro-subtitle">
              <strong>How to play Dice Clash!</strong>
            </p>
            <p>Select the points limit below.</p>
            <p>Roll the dice at least once during your turn.</p>
            <p>
              After the first roll You can choose to roll again or click HOLD.
            </p>
            <p>
              The point you have earned will be accumulated to your total amount
              of points.
            </p>
          </div>

          <IntroLower
            playerOneName={playerOneName}
            setPlayerOneName={setPlayerOneName}
            playerTwoName={playerTwoName}
            setPlayerTwoName={setPlayerTwoName}
            scoreLimit={scoreLimit}
            setScoreLimit={setScoreLimit}
            displayIntro={displayIntro}
            setDisplayIntro={setDisplayIntro}
          />
        </div>
      }
    </>
  );
};
