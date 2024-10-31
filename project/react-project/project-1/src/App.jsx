
import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import StartGame from './components/StartGame'

function App() {
  let [isGameStart, setIsGameStart] = useState(false);

  function toggleVlaue() {
    setIsGameStart(pre => !pre);
  }
 
  return (
    <>
      {isGameStart ? <StartGame toggle={toggleVlaue} /> : <HomePage toggle={toggleVlaue} />}
    </>
  )
}

export default App
