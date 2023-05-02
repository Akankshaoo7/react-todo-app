import React from "react";
import { useState } from "react";
import TodoHeader from "./TodoHeader";
import Tasks from "./Tasks";
function Todo() {
  const [todotasks, setTodoTasks] = useState([]);
  const handleonAddTask = (task) => {
    const newTAsk = {
      id: todotasks.length + 1,
      name: task,
      isCompleted: false,
    };
    const updatedTasks = [...todotasks, newTAsk];
    setTodoTasks(updatedTasks);
  };

  const handleOnDeleteTask = (id) => {
    const updatedTasks = todotasks.filter((task) => {
      if (task.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodoTasks(updatedTasks);
  };

  const handleOnComplete = (id, taskStatus) => {
    const todotaskscopy = [...todotasks];
    const taskIndex = todotaskscopy.findIndex((task) => {
      if (task.id === id) {
        return true;
      } else {
        return false;
      }
    });
    todotaskscopy[taskIndex] = {
      ...todotaskscopy[taskIndex],
      isCompleted: taskStatus,
    };
    setTodoTasks(todotaskscopy);
  };
  return (
    <div className="container">
      <TodoHeader onAddTask={handleonAddTask} />
      <Tasks
        tasks={todotasks}
        onDeleteTask={handleOnDeleteTask}
        onComplete={handleOnComplete}
      />
    </div>
  );
}

export default Todo;
