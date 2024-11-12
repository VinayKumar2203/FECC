import { useReducer } from 'react'
import './App.css'

function App() {
  function reducer(state, action) {
    if (action.type === 'increment') {
      return {
        counter: state.counter++
      }

    }
    else if (action.type === 'decrement') {
      return {
        counter: state.counter--

      }
    }
  }
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <>

      <h1>counter with useReducre</h1>
      <button onClick={() => {
        dispatch({ type: 'increment' })
      }}>increment</button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}>decrement</button>
      <p>{state.counter}</p>
    </>
  )
}

export default App
