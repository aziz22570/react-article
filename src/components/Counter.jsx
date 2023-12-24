import { useState } from "react"

const Counter = () => {
  const [count,setCount] = useState(0)
  const increment = ()=>{
    setCount(count+1)
  }
  return (
    <>
    <h2>My Counter</h2>
    <div>{count}</div>
    <button onClick={increment}>increment</button>
    </>
  )
}

export default Counter