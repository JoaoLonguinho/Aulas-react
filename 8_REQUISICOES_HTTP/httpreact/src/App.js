import './App.css';


import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([])

  // 1 - resgatando dados

  const url = "http://localhost:3000/products"

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData()
  }, [])

  console.log(products)

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>Produto: {product.name} Preço: R$ {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
