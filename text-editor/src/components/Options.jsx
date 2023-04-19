import React, { Component } from 'react';
import OptionButton from './OptionButton';

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
            </div>          
        );
    }
}

function TextFormatOptions(props) { 
    const textFormat = [
        {id: 1, value:"bold"},
        {id: 2, value:"italic"},
        {id: 3, value:"underline"},
        {id: 4, value:"strikethrough"}];
    
    return textFormat.map(opt => 
        (<><OptionButton key={opt.id} option={opt.value} bclass="format" /> </>));
}

function TextScriptOptions(props) { 
    const textScript = [
        {id: 5, value:"superscript"},
        {id: 6, value:"subscript"}];
    
    return textScript.map(opt => 
        (<><OptionButton key={opt.id} option={opt.value} bclass="script" /> </>)) ;
}

function ListOptions (props) {
    return(
        <>
            <OptionButton option="insertOrderedList" iclass="list-ol" />
            <OptionButton option="insertUnorderedList" iclass="list" />
        </>
    );
}

function UnRedoOptions (props) {
    return(
        <>
            <OptionButton option="undo" iclass="rotate-left" />
            <OptionButton option="redo" iclass="rotate-right" />
        </>
    );
}

function LinkOptions (props) {
    return(
        <>
            <OptionButton option="createLink" iclass="link" />
            <OptionButton option="unlink" />
        </>
    );
}

function AlignmentOptions (props) {
    return (
        <>
            <OptionButton option="justifyLeft" bclass="align" iclass="align-left" />
            <OptionButton option="justifyCenter" bclass="align" iclass="align-center" />
            <OptionButton option="justifyRight" bclass="align" iclass="align-right" />
            <OptionButton option="justifyFull" bclass="align" iclass="align-justify" />
        </>
    )
}
 
function IndentOptions (props) {
    return (
        <>
            <OptionButton option="indent" bclass="spacing" />
            <OptionButton option="outdent" bclass="spacing" />
        </>
    )
}


export default Options;