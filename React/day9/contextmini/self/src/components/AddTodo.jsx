import React,{useState,useContext} from 'react'
import { TodoProvider } from './Context'

const AddTodo = () => {
    const {AddTodo}=useContext(TodoProvider)
  return (
    <div>
      <h1>AddTodo</h1>
    </div>
  )
}

export default AddTodo
