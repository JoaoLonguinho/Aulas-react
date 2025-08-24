import './App.css';
import StartScreen from './components/StartScreen';
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
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
