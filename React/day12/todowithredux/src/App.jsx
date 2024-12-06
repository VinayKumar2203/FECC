import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions';
import './App.css'

function App() {
  const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleAdd = () => {
      if (title.trim()) {
          const newTodo = { id: Date.now(), title, status: false };
          dispatch(addTodo(newTodo));
          setTitle('');
      }
  };
  return (
    <>
      <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.status ? 'line-through' : 'none',
                            }}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.status ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App
