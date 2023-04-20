import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class EnglishKeyboardRowThree extends Component {
    constructor (props) {
        super(props);
    }


    render() { 
        const keyButtons = [
        {id: 1, value1:"caps lock", value2:"caps lock", bclass:"capslock"},
        {id: 2, value1: "a", value2: "A"},
        {id: 3, value1: "s", value2: "S"},
        {id: 4, value1: "d", value2: "D"},
        {id: 5, value1: "f", value2: "F"},
        {id: 6, value1: "g", value2: "G"},
        {id: 7, value1: "h", value2: "H"},
        {id: 8, value1: "j", value2: "J"},
        {id: 9, value1: "k", value2: "K"},
        {id: 10, value1: "l", value2: "L"},
        {id: 11, value1:";", value2:":"},
        {id: 12, value1:"'", value2:"\""},
        {id: 13, value1:"return", value2:"return", bclass:"return last item"}

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
 
export default EnglishKeyboardRowThree;