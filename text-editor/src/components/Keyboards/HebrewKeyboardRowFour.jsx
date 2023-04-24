import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class HebrewKeyboardRowFour extends Component {
    constructor (props) {
        super(props);
    }

    render() { 
        const keyButtons = [
            {id: 1, value1:"shift", value2:"shift", bclass:"left-shift"},
            {id: 2, value1: "ז", value2: "Z"},
            {id: 3, value1: "ס", value2: "X"},
            {id: 4, value1: "ב", value2: "C"},
            {id: 5, value1: "ה", value2: "V"},
            {id: 6, value1: "נ", value2: "B"},
            {id: 7, value1: "מ", value2: "N"},
            {id: 8, value1: "צ", value2: "M"},
            {id: 9, value1:"ת", value2:"<"},
            {id: 10, value1:"ץ", value2:">"},
            {id: 11, value1:".", value2:"?"},
            {id: 12, value1:"shift", value2:"shift", bclass:"right-shift lastitem"}
        ]
    
    return keyButtons.map(btn =>  
        (<KeyboardButton 
            key={btn.id} 
            value1={btn.value1} 
            value2={btn.value2} 
            bclass={btn.bclass}
            isShift={this.props.isShift}
            onClick={this.props.onClick}  />));
    }
}
 
export default HebrewKeyboardRowFour;