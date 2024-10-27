import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>First Counter App from React Vite</h1>
            <div className="card">
                <h1>Likes: {count}</h1>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>
                    Like 👍🏿
                </button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>
                    Dislike 👎🏿
                </button>
            </div>
        </div>
    );
}

export default Counter;
