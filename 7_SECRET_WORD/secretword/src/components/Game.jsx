import './Game.css'
function Game({verifyLetter}) {
  return (
    <div className="game">
      <div className="points">
        <span>Pontuação: ---</span>
      </div>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Tentar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Tentativas passadas: </p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game