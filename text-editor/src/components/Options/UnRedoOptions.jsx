import React, { Component } from 'react';
import OptionButton from './OptionButton';

class UnRedoOptions extends Component {
    constructor (props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (value, e) {
        e.preventDefault();
        document.execCommand(value, false, null); 
    }


    render () {
        const options = [
            {id: 1, value:"undo", iclass:"left"},
            {id: 2, value:"redo", iclass:"right"}
        ];
        
        return options.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} iclass={"rotate-" + opt.iclass}
            onClick={(e) => this.handleButtonClick(opt.value, e)} />)) ;

    }
        

}
 
export default UnRedoOptions;