// import { useContext } from "react";
import { useCounterContext } from "../hooks/useCounterContext";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
// 5- context complexo
import { useTitleColorContext } from "../hooks/UseTitleColorContextProvider";
const Home = () => {
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();
  // const { counter } = useContext(CounterContext);

  // 6- alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* 6- alterando state complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home
