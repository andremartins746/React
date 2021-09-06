import React from "react";
import "./App.css";


export default function App() {

const typedata = async () => {
    const response = await fetch("https://covid19.mathdro.id/api");
    const Object = response.json()
    console.log(Object)
}

typedata()
 
  return (
    <div className="App">
      <>
        
      </>
    </div>
  );
}
