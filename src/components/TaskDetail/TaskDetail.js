import React from "react";
import "./TaskDetail.css";

class TaskDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRefLabel = React.createRef();
    this.inputRefDescription = React.createRef();
  }
  componentDidMount() {
    this.inputRefLabel.current.focus();
    this.inputRefDescription.current.focus();
  }

  handleSubmit = (event) => {
    const { taskDetail, onSubmit } = this.props;
    event.preventDefault();

    onSubmit(taskDetail.id);

    this.setState({});
    this.props.openTask();
  };

  render() {
    const {
      onInputChange,
      inputValueLabel,
      inputValueDescription,
      onInputChangeDescription,
    } = this.props;

    return (
  
        <form
          className="taskDetail-UpdateTaskForm"
          onSubmit={this.handleSubmit}
        >
          <input
            ref={this.inputRefLabel}
            type="text"
            className="taskDetail-UpdateTaskForm-Input-Label"
            placeholder="Ajouter un titre"
            value={inputValueLabel}
            onChange={onInputChange}
            required={true}
          />
          <textarea
            ref={this.inputRefDescription}
            type="text"
            className="taskDetail-UpdateTaskForm-Input"
            placeholder="Ajouter une description"
            value={inputValueDescription}
            onChange={onInputChangeDescription}
          />

          <div className="taskDetail-UpdateTaskForm-btn">
            {" "}
            <button type="submit">Valider</button>
          </div>
        </form>
    );
  }
}

export default TaskDetail; 
