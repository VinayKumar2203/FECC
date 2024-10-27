import React, { useState } from 'react'

function ToggleBtn() {
    let [flag,setFlag]=useState(true);
  return (
    <div>
    <p>TOGGLE BUTTON PROJECT USE OF USESTATE</p>
      <h1>{flag ? "ON":'OFF'}</h1>
      <button onClick={()=>{setFlag(!flag)}}>Toggle Flag</button>
    </div>
  )
}

export default ToggleBtn
