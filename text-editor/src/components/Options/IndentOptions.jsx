import React, { Component } from 'react';
import OptionButton from './OptionButton';

class IndentOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (
            <>
                <OptionButton option="indent" bclass="spacing" />
                <OptionButton option="outdent" bclass="spacing" />
            </>
        );
    }
        

}
 
export default IndentOptions;