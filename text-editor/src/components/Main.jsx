import React, { Component } from 'react';

import Options from './Options'
import StyleLoader from './StyleLoader';
import TextInput from './TextInput';

class Main extends Component {

    render() { 
        return (
            <div className="container">
                <StyleLoader stylesheetPath="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <Options />
                <TextInput />
            </div>
        );
    }
}
 
export default Main;