import React, { Component } from 'react';

import TextFormatOptions from './Options/TextFormatOptions';
import TextScriptOptions from './Options/TextScriptOptions';
import ListOptions from './Options/ListOptions';
import UnRedoOptions from './Options/UnRedoOptions';
import LinkOptions from './Options/LinkOptions';
import AlignmentOptions from './Options/AlignmentOptions';
import IndentOptions from './Options/IndentOptions';
import AdvancedOptionButton from './Options/AdvancedOptionButton';



class Options extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="options">
                <TextFormatOptions />
                <TextScriptOptions />
                <ListOptions />
                <UnRedoOptions />
                <LinkOptions />
                <AlignmentOptions />
                <IndentOptions />
                <AdvancedOptionButton id="formatBlock" />
                <AdvancedOptionButton id="fontName" />
                <AdvancedOptionButton id="fontSize" />
                <AdvancedOptionButton id="color" />
            </div>          
        );
    }
}

export default Options;