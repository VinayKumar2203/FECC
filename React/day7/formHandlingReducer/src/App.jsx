import { useReducer } from 'react'
import './App.css'

function App() {

  let initialState =
  {
    id: 0,
    email: '',
    password: ''
  }

  function reducer(state, action) {
    console.log(state);
    switch (action.type) {
      case 'updateField': {
        return { ...state, [action.name]: action.value };
      }

      default: {
        throw Error('Unknown action: ' + action.type);

      }
    }
  }

  const [tasks, dispatch] = useReducer(reducer, initialState);
  console.log(tasks)

  function inputChange(e) {
    dispatch({
      type: "updateField",
      value: e.target.value,
      name: e.target.name

    });
  };

  function passwordChange(e) {
    dispatch({
      type: "updateField",
      value: e.target.value,
      name: e.target.name,
    });
  };

  return (
    <>
      <h1>form validation with useReducer</h1>
      <form>
        <input type="email"
          onChange={inputChange}
          value={tasks.email}
          name="email" id="email"
        />
        <input type="password"
          onChange={passwordChange}
          value={tasks.password} name="password"
          id="password"
        />
        <button type='submit' onClick={(e) => {
          e.preventDefault();
        }}>submit</button>
      </form>
      <div>
        {
          tasks.email && tasks.password ?
            `email:- ${tasks.email} ,     
         password:- ${tasks.password}` : 'no details found'
        }

      </div>
    </>
  )
}

export default App
