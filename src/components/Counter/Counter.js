import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ nbTask }) => {
  let message = 'Aucune tâche en cours';
  if (nbTask === 1) {
    message = '1 tâche en cours';
  }
  else if (nbTask > 1) {
    message = `${nbTask} tâches en cours`;
  }
  return (
    <h2 className="taskCounter">
      {message}
    </h2>
  );
};

Counter.propTypes = {
  nbTask: PropTypes.number,
};

Counter.defaultProps = {
  nbTask: 0,
};

export default Counter;
