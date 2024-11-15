import { useReducer } from "react"

const Toggle = () => {

    function reducer(state, action) {
        if (action.type === 'TOGGLE_VISIBILITY') {
           {
            isVisiblity: !state.isVisiblity
          };
        }
        throw Error('Unknown action.');
      }

    let initialArg = {
        isVisiblity: false
      }
    const [state, dispatch] = useReducer(reducer, initialArg);

  return (
    <div>
      
    </div>
  )
}

export default Toggle
