import React, { Component } from 'react';

class SpecialKeyboardButton extends Component {
    constructor (props) {
        super(props);
    } 

    render() { 
        return (
            <li class={this.props.class}>{this.props.value}</li>
        );
    }
}
 
export default SpecialKeyboardButton;