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
      .catch((error) => {
        console.log(error);
      })
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

function MouseTracker() {
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    let handleMouseMove = (e) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  },[]);
  
  return <>
    <h1>Mouse Position: X-{mouseX}, Y-{mouseY}</h1>
  </>
}


function TitleUpdater() {
  const [count, setCount] = useState(0);
   
  useEffect(()=>{
        document.title=`Count :${count}`
        console.log( document.title=`Count :${count}`)
  },[count]);

  return <>
  <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>count Increase</button>
  </>
}



function App() {
  return (
    <>
      <h1>React problem 2</h1>
      <EffectComp />
      <TitleUpdater/>
      <MouseTracker/>
    </>
  )
}

export default App
