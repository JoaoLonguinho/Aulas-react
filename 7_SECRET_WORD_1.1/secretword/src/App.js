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
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3); //Número de tentativas.
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words); // chaves do array de objetos
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; // Pegando uma categoria aleatórios pelas chaves do array e pegando o tamanho com base no tamanho do array

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]; // Pegando uma palavra aleatória com base nas palavras da categoria selecionada

    return { word, category };
  }

  const startGame = () => { // Start the game
    // pick word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters 
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    console.log(pickedWord, pickedCategory, letters);
    setGameStage(stages[1].name); // stages -> o array de objetos, 1 -> posição, name -> o dado dentro do objeto do array que está sendo alterado
  }

  const verifyLetter = (letter) => { // Checks if the word contains the mentioned letters
    // setGameStage(stages[2].name);
    const normalizeLetter = letter.toLowerCase();
    if(guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)){
      return;
    } 

    // checa se a letra já foi utilizada

  }

  const restartGame = () => { // Checks if the word contains the mentioned letters
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'mid' &&
        <MidScreen
          verifyLetter={verifyLetter}
          hint={pickedCategory}
          selectedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && <EndScreen restartGame={restartGame} />}
    </div>
  );
}

export default App;
