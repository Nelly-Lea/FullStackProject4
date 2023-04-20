import React, { Component } from 'react';
import OptionButton from './OptionButton';

class TextFormatOptions extends Component {
    constructor (props) {
        super(props);
    }


    render () {

        const textFormat = [
            {id: 1, value:"bold"},
            {id: 2, value:"italic"},
            {id: 3, value:"underline"},
            {id: 4, value:"strikethrough"}];
        
        return textFormat.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} bclass="format"/>));
    }
        
}

export default TextFormatOptions;