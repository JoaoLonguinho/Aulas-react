import { useState } from "react";
import "./MyForm.css";
function MyForm({ user }) {
  // Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);
    // Ficaria aqui abaixo:
    // Validação
    // 7 Limpando inputs
    // Envio
    setName("");
    setEmail("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1. Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2. Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* Simplificação de manipulação de e-mail usando State */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label htmlFor="">
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label htmlFor="">
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="estudante">Estudante</option>
            <option value="trabalhador">Trabalhador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
