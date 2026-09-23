import React, { useState } from 'react'

const App = () => {

const [state, setState] = useState("Time")

function getTime() {
  let time = new Date().toLocaleTimeString();
  setState(time)
}

setInterval(getTime, 1000)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  )
}

export default App
