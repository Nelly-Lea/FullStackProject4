import React, { Component } from 'react';
import OptionButton from './OptionButton';

class LinkOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return(
            <>
                <OptionButton option="createLink" iclass="link" />
                <OptionButton option="unlink" />
            </>
        );
    }
        

}
 
export default LinkOptions;