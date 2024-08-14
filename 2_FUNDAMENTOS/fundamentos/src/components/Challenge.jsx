const Challenge = () =>{
    let numOne = 2;
    let numTwo = 3;
    return(
        <div>
            <h2>o primeiro número tem o valor de {numOne} e o segundo tem o valor {numTwo}</h2>
            <button onClick={() => alert(numOne + numTwo)}>Clique aqui para ver a soma dos dois!</button>
        </div>
    )
}
export default Challenge;