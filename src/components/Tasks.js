import React from "react";
import Task from "./Task";
function Tasks({ tasks, onDeleteTask, onComplete }) {
  const allTasks = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        onDeleteTask={onDeleteTask}
        onComplete={onComplete}
      />
    );
  });
  return <div>{allTasks}</div>;
}
export default Tasks;
