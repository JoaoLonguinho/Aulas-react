// 1- criar contexto 
import { createContext, useState } from "react";

const CounterContext = createContext(); // Necessário criar e atribuir antes de exportar.
export default CounterContext;

// 2- provider 
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}