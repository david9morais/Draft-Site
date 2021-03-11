import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  // const [taskss, setTasks] = useState([]);

  const addTask = (title, state) => {
    onAddTask("New Task", "Pendent");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <div key={task.id}>{task.title}</div>;
        })}
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
