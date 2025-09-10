import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";


function Products() {
  // 4- rota dinâmica

  const { id } = useParams(); //Desestruturação de objeto

  // 5- carregamento dado individual 

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <h3>R$ {product.price}</h3>
        </div>
      )}
    </>
  )
}

export default Products
