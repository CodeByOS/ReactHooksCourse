import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} Times`
    })
  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>
                Clicked {count} Times
        </button>
    </div>
  )
}

export default Basic