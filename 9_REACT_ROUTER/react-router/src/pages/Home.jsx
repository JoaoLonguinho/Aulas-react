import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css"

const Home = () => {
    /* 3 - Carregamento de dados */

    const url = "http://localhost:3000/products";

    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            Home
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item) => ( /* Se retorna JSX, coloco o parenteses*/
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
