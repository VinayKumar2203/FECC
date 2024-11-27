import React,{createContext,useState} from "react";

const todoContext=createContext();

export const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([]);

    const addTodo=(text)=>{
        setTodos([...todos,{text,id:Date.now()}]);

    }
    const removeTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !==id));

    }
    return(
        <todoContext.Provider value={todos,addTodo,removeTodo}>
           {children}
        </todoContext.Provider>
    )
}