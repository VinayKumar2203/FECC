import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: inputVal
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setData([...data,json]));
    // setData([...data, inputVal]);
    setInputVal('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="https://jsonplaceholder.typicode.com/albums" method="post">
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder='add Post' />
        <input type="submit" value="submit" />
      </form>
      <div>
        {
          data.map((item) =>
            <div key={item.id} className='title'>
              <p>{`title:-${item.title}`}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
