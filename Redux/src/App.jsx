import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

const App = () => {

const dispatch = useDispatch()
const count = useSelector() 

  return (
    <div>

<h1>0</h1>

<button onClick={() => {

}}>Increment</button>

<button onClick={() => {

}}>Decrement</button>

    </div>
  )
}

export default App