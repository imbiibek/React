import react, {useState, useEffect} from "react";

const App = () => {

const [users, setUsers] = useState([])

useEffect( () => {

  async function githubProfile() {

  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  console.log("Hi");

  setUsers(data);
  
}

githubProfile();

}, [])

function handleChange(e) {
  console.log(e.target.value);
  
}




  return (
    <div>
      <h1>Github Profiles</h1>
      <input type="text" onChange={handleChange}></input>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
      {users.map((item) => (
        <img src={item.avatar_url} height={"100px"} width={"100px"} key={item.login}/>
      ))}
      </div>
    </div>
  );
};

export default App;
