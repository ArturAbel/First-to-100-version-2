import { useState } from "react";
import { Game } from "./assets/components/Game/Game";
import { IntroMenu } from "./assets/components/IntroMenu/IntroMenu";

// useState dice (game)
// useState current score
// useState total players score
// useState roll button
// useState hold button
// useState new button

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [scoreLimit, setScoreLimit] = useState();
  const [displayIntro, setDisplayIntro] = useState(true);

  return (
    <>
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
      <Game
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        scoreLimit={scoreLimit}
        setDisplayIntro={setDisplayIntro}
        setScoreLimit={setScoreLimit}
      />
    </>
  );
}

export default App;
