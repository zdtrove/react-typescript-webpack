import React, { useState } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
        </div>
    )
}

export default ClickCounter
