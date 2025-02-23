import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  // 使用 useEffect 只在组件挂载时执行一次
  useEffect(() => {
    fetchCatFact();
  }, []); // 依赖数组为空，确保只运行一次

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
export default App;
