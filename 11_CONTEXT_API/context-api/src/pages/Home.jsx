// import { useContext } from "react";
import { useCounterContext } from "../hooks/useCounterContext";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
// 5- context complexo
import { useTitleColorContext } from "../hooks/UseTitleColorContextProvider";
const Home = () => {
  const {counter} = useCounterContext();

  const {color} = useTitleColorContext();
  // const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home
