import React, {Component} from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        return(
            <div>
                <h5>Available Letters</h5>
                {Object.keys(this.props.letterStatus).map(l => <Letter selectLetter = {this.props.selectLetter} key = {l} letter = {l} className = {this.props.letterStatus[l] === false ? 'non-selected' : 'selected'}/>)}
            </div>
        )
    }
}

export default Letters;