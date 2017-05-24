import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
import { Line } from 'rc-progress';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.quiz_data = [
      {
        question: 'Which variable below uses acceptable naming convention?',
        correct_answer: 'my_cat',
        possible_answers: ['Cat', 'My-CaT', 'my-cat', 'my_cat']
      },
      {
        question: 'What is it called when a variable is provided a value?',
        correct_answer: 'Assignment',
        possible_answers: ['assignment', 'assessment', 'declaration', 'version control']
      },
      {
        question: 'What is the keyword we use to define a method in Ruby?',
        correct_answer: 'def',
        possible_answers: ['definitely', 'def', 'define', 'return']
      },
      {
        question: 'What are the inputs inside () after you define your method?',
        correct_answer: 'Parameters',
        possible_answers: ['arguments', 'outputs', 'inputs', 'parameters']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  handleRestart(){
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  }

  render() {
    return (
      <div>
        <h1 className="Header">Quiz App</h1>

        {/* if statement */}
        {this.state.progress < this.quiz_data.length ? (
          <div className="Questions">
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <Line percent={(this.state.progress + 1)/this.quiz_data.length*100} strokeWidth="4" strokeColor="#26a69a" />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
            <Results score={this.state.score} end_message="Congratulations, you have finished!"
            handleRestart={this.handleRestart} />
         )}
      </div>
    );
  }
}

export default App;
