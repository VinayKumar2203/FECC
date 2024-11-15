import { useReducer } from 'react'
import './App.css'
function App() {

  function reducer(state, action) {
    if (action.type === 'TOGGLE_VISIBILITY') {
      return {
        isVisibility: !state.isVisibility
      };
    }
    throw Error('Unknown action.');
  }

  let initialArg = {
    isVisibility: false
  }
  const [state, dispatch] = useReducer(reducer, initialArg);

  return (

    <>
      <h1>Toggle isVisibility</h1>
      <button onClick={() => {
        dispatch({ type: "TOGGLE_VISIBILITY" })
      }}>TOGGLE_VISIBILITY{state.isVisibility}</button>

      <h2>toggle{state.isVisibility ? " visible " : " hidden"}</h2>

    </>
  )
}

export default App
