import React, { Component } from 'react';

class KeyboardButton extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <li class={this.props.class}>
                <span class="off">{this.props.off}</span>
                <span class="on">{this.props.on}</span>
            </li>
        );
    }
}
 
export default KeyboardButton;