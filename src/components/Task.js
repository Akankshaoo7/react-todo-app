import React from "react";
function Task({task, onDeleteTask, onComplete}) {
 const handleOnClick = () => {
  onDeleteTask(task.id)
 }
 
 const handleOnChange = (e) => {
  onComplete(task.id, e.target.checked)
 }
  return (
    <div className="tasks">
   
      <input defaultChecked={task.isCompleted} type="checkbox" onChange={handleOnChange}/> 
      {task.isCompleted ? <p><del>{task.name}</del></p> : <p>{task.name}</p>}
      <button onClick={handleOnClick} className="btn">Remove</button>
    </div>
  );
}
export default Task;
