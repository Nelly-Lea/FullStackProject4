import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';
import EnglishKeyboardRowOne from './EnglishKeyboardRowOne';
import HebrewKeyboardRowTwo from './HebrewKeyboardRowTwo';
import HebrewKeyboardRowThree from './HebrewKeyboardRowThree';
import HebrewKeyboardRowFour from './HebrewKeyboardRowFour';

class HebrewKeyboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShift:false,
            isCapsLock: false
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
                    <HebrewKeyboardRowTwo isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick} />
                    <HebrewKeyboardRowThree isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick}  />
                    <HebrewKeyboardRowFour isShift={this.state.isShift || this.state.isCapsLock} onClick={this.handleButtonClick}/>
                    <KeyboardButton bclass="space lastitem" value1=" " value2=" " onClick={this.handleButtonClick} />
            </div>
        );
    }
}
 
export default HebrewKeyboard;