import { useEffect, useRef, useState } from "react"

const UseRefProb1 = () => {
    const inputRef = useRef("")
    let [text,setText]= useState('')

    useEffect(()=>{
         inputRef.current.focus();
    },[])

    function handleChange() {
        // inputRef.current.value
        // alert(inputRef.current.value)
        setText(inputRef.current.value)
    }
    
    console.log(inputRef.current)

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                onChange={handleChange}
            />

            <p>here update the input value :-{text}</p>
        </div>
    )
}

export default UseRefProb1
