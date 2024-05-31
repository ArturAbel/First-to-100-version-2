import { useState } from "react";
import { Game } from "./assets/components/Game/Game";
import { IntroMenu } from "./assets/components/IntroMenu/IntroMenu";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [scoreLimit, setScoreLimit] = useState();
  const [displayIntro, setDisplayIntro] = useState(true);

  return (
    <div>{ displayIntro ?
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
      : <Game
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        scoreLimit={scoreLimit}
        setDisplayIntro={setDisplayIntro}
        setScoreLimit={setScoreLimit}
      />
}</div>
  );
}

export default App;
