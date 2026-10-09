import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("")
  const [state, setState] = useState("Submit");
  const [isMouseOver, setMouseOver] = useState(false);
  const [heading, setHeading] = useState("")

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
   const textValue = event.target.value
    console.log(textValue);
setName(textValue)
  }

  function handleClick() {
    setHeading(name)
  }

  return (
    <div>
      <h1> Hello {heading} </h1>
      <input type="text" placeholder="Type your name" onChange={handleChange} ></input>
      <button
        style={{ backgroundColor: isMouseOver ? "blue" : "red" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        {state}
      </button>
    </div>
  );
};

export default App;
