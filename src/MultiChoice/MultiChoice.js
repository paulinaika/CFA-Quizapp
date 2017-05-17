import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './MultiChoice.css';


class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) =><Button key={i}onClick={() => this.props.updateSelected(answer)}>{answer}</Button>)}
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
          <Button bsClass="submit" onClick={this.props.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
}


export default MultiChoice;
