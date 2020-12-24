import React, {Component} from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

export class App extends Component {
  constructor() {
    super();
    this.generateLetterStatus= function() {
      let letterStatus = {}
      for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false
      }
      return letterStatus
    }
    this.state = {
      letterStatus: this.generateLetterStatus(),
      solution: {
        word: 'test',
        hint: 'test-hint'
      },
      score: 100,
      win: null
    }
  }

  selectLetter = letter => {
    const newLetStatus = this.state.letterStatus;
    newLetStatus[letter] = true;
    this.setState({letterStatus: newLetStatus});
    const scoreUpdate = this.state.solution.word.toLowerCase().includes(letter.toLowerCase()) ? 5 : -20;
    this.setState({score: this.state.score + scoreUpdate}, function() {
      this.IsFinished();
    });
  }

  IsFinished() {
    if (Array.from(this.state.solution.word.toUpperCase()).every(l => this.state.letterStatus[l])) {
      this.setState({win: true})
    }
    if (this.state.score <= 0) {
      Array.from(this.state.solution.word.toUpperCase()).forEach(l => this.state.letterStatus[l] = true)
      this.setState({win: false})
    }
  }

  render() {
    return (
      <div>
        <Score score = {this.state.score}/>
        <Solution letterStatus = {this.state.letterStatus} solution = {this.state.solution}/>
        <Letters letterStatus = {this.state.letterStatus} selectLetter = {this.selectLetter}/>
         <EndGame win = {this.state.win}/>
      </div>
    )
  }
}

export default App;
