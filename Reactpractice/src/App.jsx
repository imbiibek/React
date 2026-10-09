import React, { useState } from 'react'

const App = () => {

const [state, setState] = useState("Submit")

function changeColor() {
  setState(state.style={backgroundColor: "blue"})
}


  return (
    <div>

<h1> Hello </h1>
<input type='text' placeholder='Type your name'></input>
<button style={{backgroundColor: "red"}}  onMouseOver={changeColor} > {state} </button>

    </div>
  )
}

export default App