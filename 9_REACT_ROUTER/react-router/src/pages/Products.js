import { useParams } from "react-router-dom"

function Products() {
  // 4- rota dinâmica

  const { id } = useParams(); //Desestruturação de objeto

  return (
    <>
      <p>ID do produto: {id}</p>
    </>
  )
}

export default Products
