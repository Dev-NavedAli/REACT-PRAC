import React, { useEffect, useState } from 'react'


const App = () => {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log("Button in clicked");
    
  },[count])
  return (
    <>
     <button onClick={()=>{
      setCount(count+1)
     }} >Click ME ! {count}</button> 
    </>
  )
}

export default App
