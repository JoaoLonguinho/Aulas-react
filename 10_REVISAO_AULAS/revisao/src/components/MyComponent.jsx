function MyComponent() {
    function myFunction(){
        alert('Olá, entendi bem até aqui!')
    }
    const renderizar = (panam) => {
        if(panam){
            return <h1> Aqui funciona</h1>
        } else {
            return <h1> Não vai exibir</h1>
        }
    }
  return (
    <div>
        <button onClick={myFunction}>Aqui ele mostra um alerta</button>
        <button onClick={() => console.log('é isso ai João, tá certinho')}>Clique para exibir uma mensagem no console</button>
        {renderizar(false)}
    </div>
  )
}

export default MyComponent