import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class EnglishKeyboardRowOne extends Component {
    constructor(props) {
        super(props);
    }
    

    render() { 
        const keyButtons = [
            {id: 1, value1:"`", value2:"~"},
            {id: 2, value1:"1", value2:"!"},
            {id: 3, value1:"2", value2:"@"},
            {id: 4, value1:"3", value2:"#"},
            {id: 5, value1:"4", value2:"$"},
            {id: 6, value1:"5", value2:"%"},
            {id: 7, value1:"6", value2:"^"},
            {id: 8, value1:"7", value2:"&"},
            {id: 9, value1:"8", value2:"*"},
            {id: 10, value1:"9", value2:"("},
            {id: 11, value1:"0", value2:")"},
            {id: 12, value1:"-", value2:"_"},
            {id: 13, value1:"=", value2:"+"},
            {id: 14, value1: "delete", value2: "delete", bclass:"delete lastitem"}
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
 
export default EnglishKeyboardRowOne;