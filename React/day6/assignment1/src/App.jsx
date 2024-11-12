import { useReducer } from 'react';

function reducer(state, action) {
  // console.log(action)
  if (action.type === 'toggleChange') {
    return {
      toggle: !state.toggle
    };
  }
  throw Error('Unknown action.');
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { toggle: true });
   console.log(state)
  //  console.log(dispatch)
  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'toggleChange' })
      }}>
        Toggle btn
      </button>
      <p>Hello! Your theme is {state.toggle ? "light":"dark"} now.</p>
    </>
  );
}


function App() {
  return (
    <>
      <h1>hello</h1>
      <Counter />
    </>
  )
}

export default App
