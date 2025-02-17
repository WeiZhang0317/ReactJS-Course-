export const Task=(props)=>{
return(
<div key={props.id}>
<h1>{props.taskName}</h1>
<button onClick={()=>deleteTask(props.id)}>Delete task</button> 
</div>
);
};