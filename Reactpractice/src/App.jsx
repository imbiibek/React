import React, { useState } from 'react'

const App = () => {

  const [state, setState] = useState(0)

  function increase() {
    setState(state + 1)
  }

  const decrease = () => setState(state - 1);


  return (
    <div className="bg-red-500 text-white text-3xl p-10" >

      <h1 className="text-6xl">{state}</h1>

      <button onClick={increase} className="text-4xl">+</button>
      <button onClick={decrease} className="text-7xl">-</button>



    </div>
  )
}

export default App