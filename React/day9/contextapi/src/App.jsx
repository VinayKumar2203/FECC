import { TodoProvider } from "./components/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



const App = () => {
  return (
    <TodoProvider>
      <h1>Todo List Application</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
