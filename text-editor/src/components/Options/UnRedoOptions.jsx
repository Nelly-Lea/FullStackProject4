import React, { Component } from 'react';
import OptionButton from './OptionButton';

class UnRedoOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return(
            <>
                <OptionButton option="undo" iclass="rotate-left" />
                <OptionButton option="redo" iclass="rotate-right" />
            </>
        );
    }
        

}
 
export default UnRedoOptions;