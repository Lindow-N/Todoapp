/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import more from "../../assets/iconmonstr-caret-right-circle-filled-240.png";
import cross from "../../assets/iconmonstr-trash-can-27-240.png";
import "./Task.css";

const Task = ({ id, label, done, onCheckbox, taskDetail, taskDelete }) => (
  <li className={done ? "task task--checked" : "task"}>
    <div className="task_container1">
      <div className="round">
        <input
          id={`task-${id}`}
          className="task__checkbox"
          type="checkbox"
          checked={done}
          onChange={onCheckbox(id)}
        />
        <label for={`task-${id}`}></label>
      </div>
      <label htmlFor={`task-${id}`} className="task__label">
        {label}
      </label>
    </div>

    <div
      className={
        done ? "task_container2 task_container2_checked" : "task_container2"
      }
      onClick={taskDetail(id)}
    >
      <img className="task__label_icon" src={more} alt="+"></img>
    </div>

    <div
      className={
        done ? "task_container2 task_container2_checked" : "task_container2"
      }
      onClick={taskDelete(id)}
    >
      <img className="task__label_icon" src={cross} alt="+"></img>
    </div>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  done: PropTypes.bool,
  onCheckbox: PropTypes.func,
};

Task.defaultProps = {
  label: "Tâche non nommée",
  onCheckbox: () => {},
  done: false,
};

export default Task;
