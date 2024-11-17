import { useEffect, useRef, useState } from "react"

const UseRefProb1 = () => {
    const inputRef = useRef(null)
    let [text, setText] = useState('')

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function handleChange() {
        // inputRef.current.value
        // alert(inputRef.current.value)
        setText(inputRef.current.value)
    }
    function handleClear() {
        inputRef.current.value='';
        setText('');
    }
    console.log(inputRef.current)

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                onChange={handleChange}
            />
            <button onClick={handleClear} disabled={!text}>clear</button>
            <p>here you see input value </p>
            <h2 >:-{text}</h2>
        </div>
    )
}

export default UseRefProb1
