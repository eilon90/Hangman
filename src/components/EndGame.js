import React, {Component} from 'react';

class EndGame extends Component {
    render() {
        return <div>
            {this.props.win === null ? '' : this.props.win === true ? <h1 className = 'win'>Congratulations!</h1> : <h1 className = 'loose'>Game Over</h1>}
        </div>
    }
}

export default EndGame;