import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleClickAdd = () => setCount((prevCount) => prevCount + 1);
    const handleClickDelete = () => setCount((prevCount) => prevCount - 1);
  return (
    <div>
        <button onClick={handleClickAdd}>+</button>
        <div>{count}</div>
        <button onClick={handleClickDelete}>-</button>
    </div>
  )
}
