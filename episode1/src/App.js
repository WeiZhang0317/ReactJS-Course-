import "./App.css";
import {useState} from "react";

function App() {

  const[showText,setShowText]=useState(true);

  //inital value is the empty string
  //change inputValue by using setInputValue function
  

  return(
  <div className="App">
  <button 
  onClick={()=>{setShowText(!showText)}}  
  // setshowText 是一个函数，它用于 更新 showText 的值
  // showText 是一个变量
  >
    show/hide</button>
  {showText===true && <h1>my name is o</h1>}

  {/* === 是 严格相等（strict equality） 运算符，它比较 值 和 数据类型，只有当 值和类型 都相同时，才会返回 true。 */}
  </div>
  );
  }
  export default App;
