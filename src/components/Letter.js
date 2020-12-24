import React, {Component} from 'react';


class Letter extends Component {

    choseeLetter = () => {
        if (this.props.active === false) {return};
        this.props.selectLetter(this.props.letter)
    }

    render() {
        return <span className = {this.props.className} onClick = {this.choseeLetter}>{this.props.letter}</span>
    }
}

export default Letter