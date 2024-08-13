const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)
    console.log("ativou o evento?");
  };

  const renderSomething = (x) => {
    if(x){
      return <h1>Renderizando isso!</h1>
    }else{
      return <h1>Também posso render</h1>
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => alert('clicou')}>Clique aqui também!</button>
        <button onClick={() => {
          if(true){
            console.log('Isso não deveria existir =)')
          }
         }}>Clique aqui, por favor!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
