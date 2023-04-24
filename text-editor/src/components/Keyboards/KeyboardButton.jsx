import React, { Component } from 'react';

class KeyboardButton extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <button className={this.props.bclass}  
            onClick={(e) => this.props.onClick(this.valueToReturn(), e)}>
                {this.valueToReturn()}
            </button>
        );
    }

    valueToReturn() {
        return this.props.isShift ? this.props.value2 : this.props.value1;
    }

}
 
export default KeyboardButton;