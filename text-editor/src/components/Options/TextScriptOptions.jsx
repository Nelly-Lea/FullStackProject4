import React, { Component } from 'react';
import OptionButton from './OptionButton';

class TextScriptOptions extends Component {
    constructor (props) {
        super(props);
        this.state = {
            active: ""
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (value, e) {
        e.preventDefault();
        this.setState(prevState => ({active: prevState.active === value ? "" : value}));
        document.execCommand(value, false, null); 
    }

    render () {

        const textScript = [
            {id: 5, value:"superscript"},
            {id: 6, value:"subscript"}];
        
        return textScript.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} bclass="script" 
            isActive={this.state.active === opt.value ? true : false}
            onClick={(e) => this.handleButtonClick(opt.value, e)} />)) ;
    }
        

}
 
export default TextScriptOptions;