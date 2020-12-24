import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
 render() {
     return (
        <div>
            <Letter letter = {Array.from(this.props.solution.word).map(l => this.props.letterStatus[l.toUpperCase()] === true ? `${l} ` : '_ ')} active = {false} className = 'solution'/>
            <div>{this.props.solution.hint}</div>
        </div>
     )
 }
}

export default Solution;