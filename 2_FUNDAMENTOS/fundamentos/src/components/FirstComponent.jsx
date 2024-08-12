// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // essa função cria o h1 e o p
  /* 
    Multiplas linhas
  */
  return (
    <>
      {/* Isso é um comentário - ele só funciona se estiver dentro do elemento pai , que seria as tags <> / <div> */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </>
  );
};

export default FirstComponent;
