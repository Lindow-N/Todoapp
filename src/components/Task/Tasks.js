import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import "./Task.css";

const Tasks = ({ tasks, onTaskCheckbox, onTaskDetail }) => (
  <div className="tasks">
    <ul className="taskList">
      {tasks
        .slice(0)
        .reverse()
        .map((task) => (
          <Task
            {...task}
            key={task.id}
            onCheckbox={onTaskCheckbox}
            taskDetail={onTaskDetail}
          />
        ))}
    </ul>
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      done: PropTypes.done,
    })
  ),
  onTaskCheckbox: PropTypes.func,
};

Tasks.defaultProps = {
  tasks: [],
  onTaskCheckbox: () => {},
};

export default Tasks;
