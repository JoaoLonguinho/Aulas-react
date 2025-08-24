import './App.css';
import StartScreen from './components/StartScreen';
import MidScreen from './components/MidScreen';
import EndScreen from './components/EndScreen';
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';

const stages = [
  {
    id: 1, name: "start"
  },
  {
    id: 2, name: "mid"
  },
  {
    id: 3, name: "end"
  }
]


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);  // hook puxando o primeiro estágio do jogo
  const [words] = useState(wordsList); // Busca as palavras no arquivo words
  const startGame = () => {
    setGameStage(stages[1].name); // stages -> o array de objetos, 1 -> posição, name -> o dado dentro do objeto do array que está sendo alterado
  }
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'mid' && <MidScreen/>}
      {gameStage === 'end' && <EndScreen/>}
    </div>
  );
}

export default App;
