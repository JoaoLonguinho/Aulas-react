import './EndScreen.css'
function EndScreen({restartGame}) {
  return (
    <div>
      <h1>Deseja recomeçar o jogo?</h1>
      <button onClick={restartGame}> Sim</button>
    </div>
  )
}

export default EndScreen