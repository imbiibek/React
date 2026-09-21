import React from 'react'
import Form from './components/Form';


var userIsRegistered = true;

const App = () => {
  return (
    
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>

  )
}

export default App