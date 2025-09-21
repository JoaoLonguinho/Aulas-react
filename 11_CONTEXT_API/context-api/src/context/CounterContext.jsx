// 1- criar contexto 
import { createContext, useState } from "react";

export const CounterContext = createContext(); // Necessário criar e atribuir antes de exportar.

// 2- provider 
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}