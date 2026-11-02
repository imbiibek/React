import react, {useState, useEffect} from "react";

const App = () => {

const [users, setUsers] = useState([])
// const [name, setName] = useState("")
const [count, setCount] = useState(30);

useEffect( () => {

  async function githubProfile() {

  const response = await fetch(`https://api.github.com/users?per_page=${count}`);
  const data = await response.json();

  console.log("Hi");

  setUsers(data);
  
}

githubProfile();

}, [count])

// function handleChange(e) {
//   setName(e.target.value.toUpperCase())
  
// }

  return (
    <div>
      <h1>Github Profiles</h1>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)}></input>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
      {users.map((item) => (
        <img src={item.avatar_url} height={"100px"} width={"100px"} key={item.login}/>
      ))}
      </div>
    </div>
  );
};

export default App;
