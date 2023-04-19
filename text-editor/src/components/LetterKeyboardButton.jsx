import React, { Component } from 'react';

class LetterKeyboardButton extends Component {
    constructor (props) {
        super(props);
    } 

    render() { 
        return (
            <li class="letter">{this.props.letter}</li>
        );
    }
}
 
export default LetterKeyboardButton;