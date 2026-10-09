import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("Submit");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <h1> Hello </h1>
      <input type="text" placeholder="Type your name"></input>
      <button
        style={{ backgroundColor: isMouseOver ? "blue" : "red" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {state}
      </button>
    </div>
  );
};

export default App;
