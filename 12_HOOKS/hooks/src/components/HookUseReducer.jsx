import React, { useReducer } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })
    return (
        <div>
            <h2>Reducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Gere um número aleatorio</button>
        </div>
    )
}

export default HookUseReducer
