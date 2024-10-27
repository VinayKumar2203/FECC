import React, { useEffect, useState } from 'react'

function TimerSubscribing() {
    let [flag, setFlag] = useState(true)
    let [count, setCount] = useState(0);

    useEffect(() => {
        let timer;
        if (flag) {
            timer = setInterval(() => {
                setCount(preCount => preCount + 1)
                console.log('tik tik')
            }, 1000);
        }

        return () => { clearInterval(timer) }
    }, [flag])

    return (
        <div>
            <h1>ticker {JSON.stringify(flag)}</h1>
            <button onClick={() => {
                setFlag(!flag)
            }}>{flag ?"Subscribe":"Unsubscribe"} </button>

            <div>
                <h1>Timer{flag ? " start " : " stop "}</h1>
                <h2>{count}</h2>
                <button onClick={() => {
                    setCount(0);
                }}>Reset</button>
            </div>
        </div>
    )
}

export default TimerSubscribing
