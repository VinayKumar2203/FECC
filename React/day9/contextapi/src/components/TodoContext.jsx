import  { createContext, useState } from "react";

export const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text }; 
    setTodos([...todos, newTodo]); 
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children} 
    </TodoContext.Provider>
  );
};
