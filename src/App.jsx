import { IntroMenu } from "./assets/components/IntroMenu/IntroMenu";
import { Game } from "./assets/components/Game/Game";
import { useState } from "react";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [displayIntro, setDisplayIntro] = useState(true);
  const [scoreLimit, setScoreLimit] = useState();

  return (
    <div>
      {displayIntro ? (
        <IntroMenu
          playerOneName={playerOneName}
          setPlayerOneName={setPlayerOneName}
          playerTwoName={playerTwoName}
          setPlayerTwoName={setPlayerTwoName}
          scoreLimit={scoreLimit}
          setScoreLimit={setScoreLimit}
          displayIntro={displayIntro}
          setDisplayIntro={setDisplayIntro}
        />
      ) : (
        <Game
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          scoreLimit={scoreLimit}
          setDisplayIntro={setDisplayIntro}
          setScoreLimit={setScoreLimit}
        />
      )}
    </div>
  );
}

export default App;
