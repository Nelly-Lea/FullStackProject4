import React, { Component } from 'react';
import OptionButton from './OptionButton';

class AlignmentOptions extends Component {
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

        const align = [
            {id: 1, justify:"justifyLeft", iclass:"align-left"},
            {id: 2, justify:"justifyCenter", iclass:"align-center"},
            {id: 3, justify:"justifyRight", iclass:"align-right"},
            {id: 4, justify:"justifyFull", iclass:"align-justify"}
        ]
        return align.map(opt => 
            (<OptionButton key={opt.id} option={opt.justify} bclass="align" iclass={opt.iclass} 
            isActive={this.state.active === opt.justify ? true : false}
            onClick={(e) => this.handleButtonClick(opt.justify, e)} />)) ;
    }
        

}
 
export default AlignmentOptions;