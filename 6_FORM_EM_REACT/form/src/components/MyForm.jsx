import { useState } from 'react'
import './MyForm.css'
function MyForm() {
  // 3 - Gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário')
    console.log(name, email)
  }

  return (


    <div>
      {/* 5 - envio de form */}
        {/* 1. Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="" placeholder='Digite o seu nome'onChange={handleName}/>
            </div>
            {/* 2. Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* Simplificação de manipulação de e-mail usando State */}
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm