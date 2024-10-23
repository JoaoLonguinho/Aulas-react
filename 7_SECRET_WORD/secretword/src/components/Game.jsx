import { useState } from 'react'
import './Game.css'
function Game({verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score})  {

  let [letter, setLetter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
  }

  return (
    <div className="game">
      <div className="points">
        <span>Pontuação: {score}</span>
      </div>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'> {letter} </span>
          ) : (
            <span key={i} className='blankSquare'> </span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} 
          value={letter}/>
          <button>Tentar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Tentativas passadas: </p>
        {wrongLetters.map((wletter, i) => (
          <span key={i}> {wletter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game