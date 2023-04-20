import React, { Component } from 'react';
import OptionButton from './OptionButton';

class ListOptions extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return(
            <>
                <OptionButton option="insertOrderedList" iclass="list-ol" />
                <OptionButton option="insertUnorderedList" iclass="list" />
            </>
        );
    }
        

}
 
export default ListOptions;