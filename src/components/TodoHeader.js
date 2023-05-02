import React from "react";
import { useState } from "react";
import appIcon from "../assets/images/app-icon.png"
function TodoHeader({ onAddTask }) {
  const [task, setTask] = useState("");
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handleOnClick = () => {
    if (task) {
      onAddTask(task);
      setTask("");
    }
  };
  return (
    <>
      <img src={appIcon} width="60" alt="Todo App" />
      <h1>Todo App</h1>
      <div className="add-todo">
        <input
          id="task"
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={handleOnChange}
          onEnter
        ></input>
        <button onClick={handleOnClick} className="btn">
          Add
        </button>
      </div>
    </>
  );
}
export default TodoHeader;
