export const Task = (props)=>{
          return (
                    <div className="task">
              
                    <h1 style={{ color: props.task.completed ? "blue" : "red" }}>{props.task.taskName}</h1>
                    <button onClick={() => props.deleteTask(props.task.id)}>Delete Task</button>
                    <button onClick={()=> props.completeTask(props.task.id)}>Complete Task</button>
                    <button onClick={()=> props.cancelCompleteTask(props.task.id)}>Cancel Complete Task</button>
                    </div>
                  
          )
}

