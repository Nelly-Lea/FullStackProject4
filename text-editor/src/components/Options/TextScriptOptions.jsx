import React, { Component } from 'react';
import OptionButton from './OptionButton';

class TextScriptOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        const textScript = [
            {id: 5, value:"superscript"},
            {id: 6, value:"subscript"}];
        
        return textScript.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} bclass="script" />)) ;
    }
        

}
 
export default TextScriptOptions;