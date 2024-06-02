import { IntroMenu } from "./assets/components/IntroMenu/IntroMenu";
import { Game } from "./assets/components/Game/Game";
import { useState } from "react";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [displayIntro, setDisplayIntro] = useState(true);
  const [playerOneWin, setPlayerOneWin] = useState(0);
  const [playerTwoWin, setPlayerTwoWin] = useState(0);
  const [scoreLimit, setScoreLimit] = useState();

  return (
    <div>
      {displayIntro ? (
        <IntroMenu
          setPlayerOneName={setPlayerOneName}
          setPlayerTwoName={setPlayerTwoName}
          setDisplayIntro={setDisplayIntro}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          setScoreLimit={setScoreLimit}
          displayIntro={displayIntro}
          scoreLimit={scoreLimit}
        />
      ) : (
        <Game
          setDisplayIntro={setDisplayIntro}
          setPlayerOneWin={setPlayerOneWin}
          setPlayerTwoWin={setPlayerTwoWin}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          playerOneWin={playerOneWin}
          playerTwoWin={playerTwoWin}
          setScoreLimit={setScoreLimit}
          scoreLimit={scoreLimit}
        />
      )}
    </div>
  );
}

export default App;
