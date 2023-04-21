import React, { Component } from 'react';
import OptionButton from './OptionButton';

class ListOptions extends Component {
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
            {id: 1, value:"insertOrderedList", iclass:"list-ol"},
            {id: 2, value:"insertUnorderedList", iclass:"list"}
        ];
        
        return options.map(opt => 
            (<OptionButton key={opt.id} option={opt.value} iclass={opt.iclass}
            onClick={(e) => this.handleButtonClick(opt.value, e)} />)) ;

    }   

}
 
export default ListOptions;