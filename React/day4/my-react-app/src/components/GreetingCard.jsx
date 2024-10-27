import React from 'react'

function GreetingCard({cards}) {
    return (
        <>
           <h1>hello</h1>
           <ul>
            {cards.map((item,index)=>(
                <li key={index}>{item.greeting }! {item.name}</li>
            ))}
           </ul>
        </>
    )
}

export default GreetingCard
