import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class EnglishKeyboardRowTwo extends Component {
    constructor (props) {
        super(props);
    }

    render() { 
    const keyButtons = [
        {id: 0, value1:"tab", value2:"tab", bclass:"tab"},
        {id: 1, value1: "q", value2: "Q"},
        {id: 2, value1: "w", value2: "W"},
        {id: 3, value1: "e", value2: "E"},
        {id: 4, value1: "r", value2: "R"},
        {id: 5, value1: "t", value2: "T"},
        {id: 6, value1: "y", value2: "Y"},
        {id: 7, value1: "u", value2: "U"},
        {id: 8, value1: "i", value2: "I"},
        {id: 9, value1: "o", value2: "O"},
        {id: 10, value1: "p", value2: "P"},
        {id: 11, value1:"[", value2:"{"},
        {id: 12, value1:"]", value2:"}"},
        {id: 13, value1:"/", value2:"|", bclass: " lastitem"}
    ]

    return keyButtons.map(btn =>  
        (<KeyboardButton 
            key={btn.id} 
            value1={btn.value1} 
            value2={btn.value2} 
            bclass={btn.bclass}
            isShift={this.props.isShift} />));
    }
}
 
export default EnglishKeyboardRowTwo;