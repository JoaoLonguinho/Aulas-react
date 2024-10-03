import './Game.css'
function Game({verifyLetter}) {
  return (
    <div>
      <button onClick={verifyLetter}>Continuar o jogo</button>
    </div>
  )
}

export default Game