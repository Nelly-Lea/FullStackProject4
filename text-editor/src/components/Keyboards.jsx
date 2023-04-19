import React, { Component } from 'react';
import EnglishKeyboard from './EnglishKeyboard';

class Keyboards extends Component {
    constructor (props) {
        super(props);
    } 

    render() {

        return (
            <div>
               <EnglishKeyboard /> 
            </div>
        );
    }
}
 
export default Keyboards;