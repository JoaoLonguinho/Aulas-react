import React from 'react'

const EndScreen = ({restartGame}) => {
  return (
    <div>
      <p>Tela final</p>
      <button onClick={restartGame}>Reinicia o jogo</button>
    </div>
  )
}

export default EndScreen
