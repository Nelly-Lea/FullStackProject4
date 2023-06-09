import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class HebrewKeyboardRowTwo extends Component {
    constructor (props) {
        super(props);
    }

    render() { 
    const keyButtons = [
        {id: 0, value1:"tab", value2:"tab", bclass:"tab"},
        {id: 1, value1: "/", value2: "Q"},
        {id: 2, value1: "'", value2: "W"},
        {id: 3, value1: "ק", value2: "E"},
        {id: 4, value1: "ר", value2: "R"},
        {id: 5, value1: "א", value2: "T"},
        {id: 6, value1: "ט", value2: "Y"},
        {id: 7, value1: "ו", value2: "U"},
        {id: 8, value1: "ן", value2: "I"},
        {id: 9, value1: "ם", value2: "O"},
        {id: 10, value1: "פ", value2: "P"},
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
            isShift={this.props.isShift} 
            onClick={this.props.onClick} />));
    }
}
 
export default HebrewKeyboardRowTwo;