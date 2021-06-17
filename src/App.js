import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const url = "";

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    getWithAxios();
  }, []);

  const getWithAxios = async () => {
    const response = await axios.get(url);
    console.log(response.data)
    setData(response.data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Random Programmer Joke API</h2>
      </header>
      
        
         
          return (
            <div className="user-container">
            <div className="info-item">
            <h5>Joke: {data}</h5>
            </div>
            </div>
          )
        )
      
        
    </div>
  );
}

export default App;
