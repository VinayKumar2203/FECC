import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
// import { useEffect } from 'react'
function EffectComp() {
  let [apis, setApis] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApis(json))
  }, [])

  return <>
    <pre><code>
      show: {JSON.stringify(apis)}
    </code></pre>

    <div>
      {
        apis ? (
          apis.map(api => <p key={api.id}> name:-{api.name}</p>)
        ) : (
          <p>Loading....</p>
        )
      }
    </div>


  </>

}



function App() {
  return (
    <>
      <h1>React problem 2</h1>
      <EffectComp />
    </>
  )
}

export default App
