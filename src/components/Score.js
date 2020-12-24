import React, {Component, component} from 'react';

class Score extends Component {

    scoreLevel() {
        if (this.props.score > 80) {
            return 'high-score';
        }
        else if (this.props.score > 50) {
            return 'medium-score';
        }
        else {return 'low-score'}
    }

    render(){
        return <h4> Score: <span className = {this.scoreLevel()}>{this.props.score}</span></h4>
    }
}

export default Score;