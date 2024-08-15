import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Sim, vai exibir</p>}
      {!x && <p>Agora, X é falso</p>}
      {/* ????????????????? */}
      <h1>If ternário</h1>
      {name === "Bianca" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado </p>
        </div>
      )}
      <button onClick={() => setName('Bianca')}>Clique aqui para alterar</button>
    </div>
  );
};

export default ConditionalRender;
