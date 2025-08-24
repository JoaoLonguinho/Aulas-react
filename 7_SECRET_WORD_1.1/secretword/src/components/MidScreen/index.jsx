import './MidScreen.css'

const MidScreen = ({verifyLetter, hint, selectedWord}) => {
  return (
    <div className='in-game-container'>
      <div className="game">
        <p className='points'>
          <span>Pontuação: 000</span>
        </p>
      </div>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>
        Dica: <span className='highlight'>{hint}</span>
      </h3>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className="black-square"></span>
      </div>
      <div className="letter-container">
        <p>Tente advinhar uma <span className="highlight">letra</span> da <div className="highlight">palavra</div></p>
        <form>
          <input type="text" name='letter' maxLength="1" required />
          <button onClick={verifyLetter}>Tentar</button>
        </form>
      </div>
      <div className="wrong-letter-container">
        <p>Letras já utilizadas:</p>
        <div>
          <span>a,</span>
          <span>b,</span>
        </div>
      </div>
    </div>
  )
}

export default MidScreen
