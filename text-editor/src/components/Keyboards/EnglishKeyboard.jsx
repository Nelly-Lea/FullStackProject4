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
        switch(char){
            case 'shift': 
                this.handleShift ();
                break;
            case 'caps lock':
                this.handleCapsLock ();
                break;
            case 'tab':
                this.insertTextAtCaret("\u00a0\u00a0\u00a0\u00a0");
                break;
            case  'delete':
                window.getSelection().deleteFromDocument();
                break;
           
            default:
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
                range.insertNode(text !== "enter" ? document.createTextNode(text) : document.createElement("br"));
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





export default EnglishKeyboard;