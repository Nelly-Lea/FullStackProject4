import React, { Component } from 'react';
import OptionButton from './OptionButton';

class AlignmentOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return(
            <>
                <OptionButton option="justifyLeft" bclass="align" iclass="align-left" />
                <OptionButton option="justifyCenter" bclass="align" iclass="align-center" />
                <OptionButton option="justifyRight" bclass="align" iclass="align-right" />
                <OptionButton option="justifyFull" bclass="align" iclass="align-justify" />
            </>
        );
    }
        

}
 
export default AlignmentOptions;