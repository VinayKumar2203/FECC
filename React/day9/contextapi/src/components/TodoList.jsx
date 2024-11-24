import  { useContext } from "react";
import { TodoContext } from "./TodoContext";


const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext); 

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
