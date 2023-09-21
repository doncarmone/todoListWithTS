// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";


export const TodoList = () => {
    const { todos } = useTodos();
    // const { todoState } = useContext(TodoContext);
    // const { todos } = todoState;

    return (
        <ul>
            { todos.map( todo => <TodoItem key={todo.id} todo={ todo }/>)}
        </ul>
    )
}
