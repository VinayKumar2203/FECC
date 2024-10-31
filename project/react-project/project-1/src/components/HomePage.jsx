import { useState } from "react"
import StartGame from "./StartGame";

function HomePage({ toggle }) {
  return (
    <div className='home'>
      <div className='logo'>
        <img src="https://th.bing.com/th/id/OIP.s9BY9kkvX5-AVnF3exGwcAHaHa?rs=1&pid=ImgDetMain" alt="dice home img" />

      </div>
      <div className='gameName'>
        <h1>DICE GAME</h1>
        <button onClick={toggle} className='HomeBtn'>Play Now</button>
      </div>
    </div>
  )
}

export default HomePage
