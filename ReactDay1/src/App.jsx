import React from 'react'

const App = () => {

  function checkResult() {
    let marks = prompt("Enter marks:")
    if (marks >= 40) {
      alert("Pass")
    } else {
      alert("Fail")
    }
  }

  return (
    <div>
      <button onClick={checkResult}>Check Result</button>
    </div>
  )
}

export default App

// see filter 