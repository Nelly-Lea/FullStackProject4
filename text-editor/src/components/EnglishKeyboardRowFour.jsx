import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class EnglishKeyboardRowFour extends Component {
    constructor (props) {
        super(props);
    }

    render() { 
        const keyButtons = [
            {id: 1, value1:"shift", value2:"shift", bclass:"left-shift"},
            {id: 2, value1: "z", value2: "A"},
            {id: 3, value1: "x", value2: "S"},
            {id: 4, value1: "c", value2: "D"},
            {id: 5, value1: "v", value2: "F"},
            {id: 6, value1: "b", value2: "G"},
            {id: 7, value1: "n", value2: "H"},
            {id: 8, value1: "m", value2: "J"},
            {id: 9, value1:",", value2:"<"},
            {id: 10, value1:".", value2:">"},
            {id: 11, value1:"/", value2:"?"},
            {id: 12, value1:"shift", value2:"shift", bclass:"right-shift lastitem"}
        ]
    
    return keyButtons.map(btn =>  
        (<KeyboardButton 
            key={btn.id} 
            value1={btn.value1} 
            value2={btn.value2} 
            bclass={btn.bclass}
            isShift={this.props.isShift}
            onShift={btn.value1 === "shift"? this.handleShift : null} />));
    }
}
 
export default EnglishKeyboardRowFour;