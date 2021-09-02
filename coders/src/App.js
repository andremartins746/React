import React, {useState, useEffect} from "react";
import "./App.css";


function App() {
  const [Repositorios, setRepositorios] = useState([])

  useEffect(async () => {
      const response = await fetch('https://api.github.com/users/andremartins746/repos');
      const data = response.json()
      setRepositorios(data)
  },[])

  console.log("Eai thiago Suave Mnao")

  return (
    <div className="App">
      <>
      <ul>
        {
          Repositorios.map(repo => {
            <li key={repo.id}>{repo.name}</li>
          })
        }
      </ul>
      </>
    </div>
  );
}

export default App;
