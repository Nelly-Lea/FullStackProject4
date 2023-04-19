import React, { Component } from 'react';

import Options from './Options'
import StyleLoader from './StyleLoader';
import TextInput from './TextInput';
import Keyboards from './Keyboards';
import EnglishKeyboard from './EnglishKeyboard';

class Main extends Component {

    render() { 
        return (
            <div className="container">
                <StyleLoader stylesheetPath="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <StyleLoader stylesheetPath="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
                <Options />
                <TextInput />
                <Keyboards />
            </div>
        );
    }
}
 
export default Main;