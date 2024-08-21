function UserDetails({ nome, cidade, temHabilitacao }) {
    return (
      <div>
        <h1>Nome: {nome}</h1>
        <span>Cidade: {cidade} </span> 
        <span>
          Esta pessoa pode dirigir? {temHabilitacao && "Sim , ela pode"}
        </span>
      </div>
    );
  }
  export default UserDetails;