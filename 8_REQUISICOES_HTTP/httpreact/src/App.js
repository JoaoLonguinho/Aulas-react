import './App.css';


import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([])

  // 1 - resgatando dados

  const url = "http://localhost:3000/products"

  useEffect(() => {
    const fetchData = async () => { // Necessário criar uma função e chamar ela mesma dentro do useEffect
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data);
    }
    fetchData();
  }, [])

  console.log(products)

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;
