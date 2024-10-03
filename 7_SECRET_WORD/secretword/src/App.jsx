//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

//data
import {wordList}  from './data/words'

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import EndScreen from './components/EndScreen';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)

  //Inicia o game
  const startGame = () =>{
    setGameStage(stages[1].name)
  }

  // rocess the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name)

  }
  const restartGame = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/> }
      {gameStage === "end" && <EndScreen restartGame={restartGame}/>}
    </div>
  );
}

export default App;
