import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

class Form extends React.PureComponent {
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
    const { onSubmit, inputValueLabel, inputValueDescription } = this.props;
    event.preventDefault();
    onSubmit(inputValueLabel, inputValueDescription);
  };

  render() {
    const {
      inputValueLabel,
      onInputChange,
      inputValueDescription,
      onInputChangeDescription,
    } = this.props;
    return (
      <div className="form-MainContainer">
        <form className="addTaskForm" onSubmit={this.handleSubmit}>
          <input
            ref={this.inputRefLabel}
            type="text"
            className="addTaskForm__input"
            placeholder="Ajouter un titre"
            value={inputValueLabel}
            onChange={onInputChange}
            required={true}
          />
          <input
            ref={this.inputRefDescription}
            type="text"
            className="addTaskForm__input"
            placeholder="Ajouter une description"
            value={inputValueDescription}
            onChange={onInputChangeDescription}
          />

          <button type="submit">Ajouter une tâche</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  inputValueLabel: PropTypes.string,
  onInputChange: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  inputValueLabel: "",
  onInputChange: () => {},
};

export default Form;
