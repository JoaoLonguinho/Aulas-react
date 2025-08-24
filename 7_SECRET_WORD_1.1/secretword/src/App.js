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
  const [picketWord, setPickedWord] = useState("");
  const [picketCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const pickWordAndCategory = () => {
    const categories = Object.keys(words); // chaves do array de objetos
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; // Pegando uma categoria aleatórios pelas chaves do array e pegando o tamanho com base no tamanho do array

    console.log(category);
  }

  const startGame = () => { // Start the game
    // pick word and category
  pickWordAndCategory();

    setGameStage(stages[1].name); // stages -> o array de objetos, 1 -> posição, name -> o dado dentro do objeto do array que está sendo alterado
  }

  const verifyLetter = () => { // Checks if the word contains the mentioned letters
    setGameStage(stages[2].name);
  }

  const restartGame = () => { // Checks if the word contains the mentioned letters
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'mid' && <MidScreen verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <EndScreen restartGame={restartGame}/>}
    </div>
  );
}

export default App;
