import './App.css';


import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([])

  // 1 - resgatando dados

  const url = "http://localhost:3000/products"
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData()
  }, [])


  // Adicionando dados 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>Produto: {product.name} Preço: R$ {product.price}</li>
        ))}
      </ul>
      <hr />
      <div className="add-produc">
        <form onSubmit={handleSubmit} className='create-product-form'>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="text" name="value" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
