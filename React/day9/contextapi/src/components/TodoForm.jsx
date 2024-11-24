import  { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext); 
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text); 
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update the input value
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
