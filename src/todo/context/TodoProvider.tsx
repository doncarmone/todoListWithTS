import { useReducer } from "react"
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: "Resident Evil: Director's Cut",
            completed: false
        },
        {
            id: '2',
            desc: "Resident Evil 2",
            completed: false
        },
        {
            id: '3',
            desc: "Resident Evil 3: Last Escape",
            completed: false
        },
        {
            id: '4',
            desc: "Resident Evil Code: Veronica",
            completed: false
        },
        {
            id: '5',
            desc: "Resident Evil 0",
            completed: false
        },
        {
            id: '6',
            desc: "Resident Evil Remake",
            completed: false
        },
    ],
    completed: 0,
    pending: 0
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        // dispatch({ type: 'toggelTodo', payload: { id: id} })
        dispatch({ type: 'toggelTodo', payload: { id } })
    }

    return (
        <TodoContext.Provider value={{ todoState, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
