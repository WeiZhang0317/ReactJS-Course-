import "./App.css";
import { useState } from "react";

function App() {
  const[todoList,setTodoList]=useState([]);
  const[newTask,setNewTask]=useState("")
  // create state to represent input value

  const handleChange =(event) =>{
   setNewTask(event.target.value);
  };//这个函数会捕获用户在输入框中输入的内容，并更新状态 newTask，确保 React 知道用户输入了什么。

  const addTask=()=>{
     const newTodoList=[...todoList,newTask]
     // ... means todolist+newtask 
     setTodoList(newTodoList);
    };



  
  return (
    <div className="App">

    <div className="addTask">
    <input onChange={handleChange} />
    {/*any changes pass in the input value  */}
    <button onClick={addTask}>Add task</button>      
    </div>

    <div className="list">
    {todoList.map((task)=>{
     return<h1>{task}</h1>

    })}

    </div>
    </div>
  );
}

export default App;