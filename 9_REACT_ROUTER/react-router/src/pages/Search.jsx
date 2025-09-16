import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [SearchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + SearchParams;

    const {data: items, loading, error} = useFetch(url);

  return (
    <div>
      <h1>Resultados: </h1>
      <ul className="products">
                {items && items.map((item) => ( /* Se retorna JSX, coloco o parenteses*/
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        {/* 4- Rota dinâmica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Search
