import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Any = () => {
    const count = useContext(counterContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Any
