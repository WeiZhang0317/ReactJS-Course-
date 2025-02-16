import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); // 存储任务列表
  const [newTask, setNewTask] = useState(""); // 存储新任务的输入内容
  // create state to represent input value

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }; //这个函数会捕获用户在输入框中输入的内容，并更新状态 newTask，确保 React 知道用户输入了什么。

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    //task 是一个对象，表示一个待办任务。它有两个属性, id和taskName

    // 创建新数组（原数组 + 新任务）
  
    setTodoList([...todoList, task]); // 更新任务列表
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id)); // 过滤掉与 taskName 匹配的任务,但是会重复删除同一个名称，举例我想删掉第一个clean room,但是会把之后所有的clean room都删除
    };

  };
  //   const arr = ["a","b","c"];
  //   const newArr=arr.filter((name)=>{
  //   if (name ==="c"){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // });

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        {/*any changes pass in the input value  */}
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>Delete task</button>
              {/* 调用 deleteTask(taskName) 并传递参数时，你需要使用 箭头函数，否则 deleteTask(taskName) 会在组件渲染时立即执行，而不是在点击时执行。 */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
