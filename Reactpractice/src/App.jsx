import React, { useState } from "react";

const App = () => {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();

  function changefname(event) {
    const fnameInput = event.target.value;
    setfname(fnameInput);
  }

  function changelname(event) {
    const lnameInput = event.target.value;
    setlname(lnameInput);
  }

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input
          name="fname"
          placeholder="First name"
          value={fname}
          onChange={changefname}
        ></input>
        <input
          name="lname"
          placeholder="Second name"
          value={lname}
          onChange={changelname}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
