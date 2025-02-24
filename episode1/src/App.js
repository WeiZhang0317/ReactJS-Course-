import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const[name, setName]=useState("")
  const[predictAge,setPredictAge]=useState(null);
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictAge(res.data);  // 只存 `age`，而不是整个对象
      });
  };
  
  return (
    <div className="App">
      <input placeholder="eg,perdo"
      onChange={(event)=>{
        setName(event.target.value);
      }}></input>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predict Age: {predictAge ? predictAge.age : "N/A"}</h1>
    </div>
  );
}

export default App;
