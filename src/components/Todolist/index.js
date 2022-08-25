import React, { PureComponent } from "react";
import Form from "../Form/Form";
import Counter from "../Counter/Counter";
import Tasks from "../Task/Tasks";
import TaskDetail from "../TaskDetail/TaskDetail";
import tasksData from "../../data/tasks";

import "./todolist.css";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskInputLabel: "",
      taskInputDescription: "",
      tasks: tasksData,
      taskDetail: {
        id: 0,
        label: "",
        description: "",
        done: true,
      },
      openTask: false,
    };
  }

  handleTaskInputLabelChange = (event) => {
    this.setState({
      taskInputLabel: event.target.value,
    });
  };

  handleTaskInputDescriptionChange = (event) => {
    this.setState({
      taskInputDescription: event.target.value,
    });
  };

  handleTaskCheckbox = (taskId) => () => {
    const { tasks } = this.state;

    const tasksModified = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    let finalArrayTasks = tasksModified.filter((t) => t.done === true);
    let falseArrayTasks = tasksModified.filter((t) => t.done === false);
    finalArrayTasks.push(...falseArrayTasks);

    this.setState({
      tasks: finalArrayTasks,
    });
  };

  addTask = (label, description, done = false) => {
    const { tasks } = this.state;

    let maxID = Math.max(...tasks.map((task) => task.id));

    this.setState({
      tasks: [...tasks, { id: ++maxID, label, description, done }],
      taskInputLabel: "",
      taskInputDescription: "",
    });
  };

  handleTaskDetail = (taskId) => () => {
    const { tasks, taskDetail } = this.state;

    tasks.map((task) => {
      if (taskId === task.id) {
        this.setState({
          taskDetail: task,
          taskInputLabel: task.label,
          taskInputDescription: task.description,
          openTask: true,
        });
      }
      return task;
    });
  };

  UpdateTask = (taskId) => {
    const { tasks, taskInputLabel, taskInputDescription } = this.state;
    const tasksModified = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          label: taskInputLabel,
          description: taskInputDescription,
        };
      }
      return task;
    });

    let finalArrayTasks = tasksModified.filter((t) => t.done === true);
    let falseArrayTasks = tasksModified.filter((t) => t.done === false);
    finalArrayTasks.push(...falseArrayTasks);

    this.setState({
      tasks: finalArrayTasks,
      taskInputLabel: "",
      taskInputDescription: "",
    });
  };

  handleTaskDetailClose = () => {
    this.setState({ openTask: false });
  };

  render() {
    const { taskInputLabel, tasks, taskInputDescription, taskDetail } =
      this.state;

    const nbProcessingTasks = tasks.filter((task) => !task.done).length;
    return (
      <div className="todoList-MainContainer">
        <div className="todoList-TitleContainer">
          <h1>
            <span>Tasks</span> List
          </h1>
        </div>
        {this.state.openTask ? (
          <>
            <div className="todoList-bodyContainerDetail">
              <TaskDetail
                taskDetail={taskDetail}
                inputValueLabel={taskInputLabel}
                inputValueDescription={taskInputDescription}
                onInputChange={this.handleTaskInputLabelChange}
                onInputChangeDescription={this.handleTaskInputDescriptionChange}
                onSubmit={this.UpdateTask}
                openTask={this.handleTaskDetailClose}
              />
            </div>
          </>
        ) : (
          <>
            <div className="todoList-bodyContainer">
              <Counter nbTask={nbProcessingTasks} />
              <Tasks
                tasks={tasks}
                onTaskCheckbox={this.handleTaskCheckbox}
                onTaskDetail={this.handleTaskDetail}
              />
              <Form
                inputValueLabel={taskInputLabel}
                inputValueDescription={taskInputDescription}
                onInputChange={this.handleTaskInputLabelChange}
                onInputChangeDescription={this.handleTaskInputDescriptionChange}
                onSubmit={this.addTask}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TodoList;
