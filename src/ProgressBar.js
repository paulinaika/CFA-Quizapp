import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';

//stateless Component

const ProgressBar = ({current_step, question_length}) => {
  return <p>{current_step}/{question_length}</p>
}

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired,
}

// class ProgressBar extends Component {
//   render() {
//     return <p>{this.props.current_step}/{this.props.question_length}</p>
//   }
// }

export default ProgressBar;
