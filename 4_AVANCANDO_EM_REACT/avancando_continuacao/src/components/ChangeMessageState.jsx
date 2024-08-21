

function ChangeMessageState({handleMessage}) {
    const messages = ['Oi', 'eai', 'como vai?', 'tudo beleza?']
  return (
    <>
        <button onClick={() => handleMessage(messages[0])}>Clique aqui para trocar a por {messages[0]}</button>
        <button onClick={() => handleMessage(messages[1])}>Clique aqui para trocar a por {messages[1]}</button>
        <button onClick={() => handleMessage(messages[2])}>Clique aqui para trocar a por {messages[2]}</button>
        <button onClick={() => handleMessage(messages[3])}>Clique aqui para trocar a por {messages[3]}</button>
    </>
  )
}

export default ChangeMessageState