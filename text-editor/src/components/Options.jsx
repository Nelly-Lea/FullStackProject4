import React, { Component } from 'react';
import OptionButton from './OptionButton';
import StyleLoader from './StyleLoader';

class Options extends Component {
    constructor(props) {
        super(props);
    }
    

    render() { 
        return (
            <div class="options">
                <TextFormatOptions />
                <ListOptions />
                <UnRedoOptions />
                <LinkOptions />
            </div>          
        );
    }
}

function TextFormatOptions(props) {
    const textFormat = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript"];
    return textFormat.map(opt => (<><OptionButton option={opt} class={opt} /> </>));
}

function ListOptions (props) {
    return(
        <>
            <OptionButton option="insertOrderedList" class="list-ol" />
            <OptionButton option="insertUnorderedList" class="list" />
        </>
    );
}

function UnRedoOptions (props) {
    return(
        <>
            <OptionButton option="undo" class="rotate-left" />
            <OptionButton option="redo" class="rotate-right" />
        </>
    );
}

function LinkOptions (props) {
    return(
        <>
            <OptionButton option="createLink" class="link" />
            <OptionButton option="unlink" class="unlink" />
        </>
    );
}
 
export default Options;