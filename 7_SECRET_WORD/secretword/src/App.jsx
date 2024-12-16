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

const guessedQnt = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState([3])
  const [score, setScore] = useState(0)

const pickWordAndCategory = () => {

  //pegar a categoria
  const categories = Object.keys(words) // chaves das categorias do words.js
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length )]

  console.log(category)

  //pegar a palavra
  const word = words[category][Math.floor(Math.random() * words[category].length )]

  console.log(word)

  return {word, category}
}
  //Inicia o game
  const startGame = () =>{


    const {word, category} = pickWordAndCategory()

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(word, category, wordLetters)


    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // rocess the letter input
  const verifyLetter = (letter) =>{
    console.log(letter)
    const normalizedLetter = letter.toLowerCase();
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
        setGessedLetters((actualGuessedLetters ) => [
          ...actualGuessedLetters, normalizedLetter
        ])
    } else {
      setWrongLetters((actualWrongLetters ) => [
        ...actualWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses -1);
    }
  }

  const clearLetterStates = () => {
    setGessedLetters([]);
    setWrongLetters([]);
  }
  useEffect(() => {
    if(guesses <= 0){

      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])
  const restartGame = () =>{

    setScore(0);
    setGuesses(guessedQnt);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory}  
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      /> }
      {gameStage === "end" && <EndScreen restartGame={restartGame}/>}
    </div>
  );
}

export default App;
