import React, { Component } from 'react';
import OptionButton from './OptionButton';

class IndentOptions extends Component {
    constructor (props) {
        super(props);
        this.state = {
            active: ""
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (value, e) {
        e.preventDefault();
        this.setState(({active: value}));
        document.execCommand(value, false, null); 
    }

    render () {
        const spacing = [
            {id: 1, value:"indent"},
            {id: 2, value:"outdent"},
        ]

        return spacing.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} bclass="spacing" 
            isActive={this.state.active === opt.value ? true : false}
            onClick={(e) => this.handleButtonClick(opt.value, e)} />)) ;
    }
        

}
 
export default IndentOptions;