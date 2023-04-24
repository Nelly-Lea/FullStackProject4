import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';
import EnglishKeyboardRowOne from './EnglishKeyboardRowOne';
import EnglishKeyboardRowTwo from './EnglishKeyboardRowTwo';
import EnglishKeyboardRowThree from './EnglishKeyboardRowThree';
import EnglishKeyboardRowFour from './EnglishKeyboardRowFour';

class EnglishKeyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShift:false,
            isCapsLock : false
        }

        this.handleShift = this.handleShift.bind(this);
        this.handleCapsLock = this.handleCapsLock.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleShift () {
        this.setState(prevState => ({isShift: !prevState.isShift}));
    }

    handleCapsLock () {
        this.setState(prevState => ({isCapsLock: !prevState.isCapsLock}));
    }

    handleButtonClick (char, e) {
        e.preventDefault();
        if (char === 'shift') {
            this.handleShift ();
        } else if (char === 'caps lock') {
            this.handleCapsLock ();
        } else if(char === 'tab') {
            this.insertTextAtCaret("\u00a0\u00a0\u00a0\u00a0");
        } else if (char === 'delete') {
            window.getSelection().deleteFromDocument();
        } else {
            this.insertTextAtCaret(char);
            if (this.state.isShift && char !== 'enter') {
                this.setState({isShift: false});
            }
        }
    }

    insertTextAtCaret(text) {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode( document.createTextNode(text !== "enter" ? text : "\u000d\u000a") );
                range.collapse(false);
            }
        } else if (document.selection && document.selection.createRange) {
            document.selection.createRange().text = text;
        }
    }

    render() { 
        return (
            <div id="keyboard" >
                    <EnglishKeyboardRowOne isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick}/>
                    <EnglishKeyboardRowTwo isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick} />
                    <EnglishKeyboardRowThree isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick}/>
                    <EnglishKeyboardRowFour isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick}/>
                    <KeyboardButton bclass="space lastitem" value1=" " value2=" " onClick={this.handleButtonClick}/>
            </div>
        );
    }
}



function RowFour (props) {

    const keyButtons = [
        {id: 13, value1:"shift", value2:"shift", bclass:"left-shift"},
        {id: 14, value1: "z", value2: "A"},
        {id: 15, value1: "x", value2: "S"},
        {id: 16, value1: "c", value2: "D"},
        {id: 17, value1: "v", value2: "F"},
        {id: 18, value1: "b", value2: "G"},
        {id: 19, value1: "n", value2: "H"},
        {id: 20, value1: "m", value2: "J"},
        {id: 24, value1:",", value2:"<"},
        {id: 25, value1:".", value2:">"},
        {id: 25, value1:"/", value2:"?"},
        {id: 13, value1:"shift", value2:"shift", bclass:"right-shift lastitem"}
    ]
    
    return keyButtons.map(btn =>  
        (<KeyboardButton 
            key={btn.id} 
            value1={btn.value1} 
            value2={btn.value2} 
            bclass={btn.bclass}
            isShift={this.props.isShift}
            onShift={btn.value1 === "shift"? this.handleShift : null} />));

}


export default EnglishKeyboard;