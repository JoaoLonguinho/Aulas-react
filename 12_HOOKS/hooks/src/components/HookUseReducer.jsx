import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    // 2- Mais avançado

    const initialTasks = [
        { id: 0, text: "Primeira tarefa" },
        { id: 1, text: "Segunda tarefa" }
    ]

    const tasksReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTasks = { id: Math.random(), text: taskText };
                setTaskText("")
                return [...state, newTasks];
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }
    };
    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => { 
        dispatchTasks({type: "DELETE", id: id})
    }

    return (
        <div>
            <h2>Reducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Gere um número aleatorio</button>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder='Preencha o nome da tarefa' onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="Cadastrar tarefa" />
            </form>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task.id}>{task.text} <button onClick={() => removeTask(task.id)}>X</button></li>
                ))}
            </ul>
        </div>
    )
}

export default HookUseReducer
