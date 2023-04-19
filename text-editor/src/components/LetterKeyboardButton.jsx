import React, { Component } from 'react';

class LetterKeyboardButton extends Component {
    constructor (props) {
        super(props);
        
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (char, e) {
        e.preventDefault();
        console.log(char);
        this.insertTextAtCaret(char);
    }

    insertTextAtCaret(text) {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode( document.createTextNode(text) );
                range.collapse(false);
            }
        } else if (document.selection && document.selection.createRange) {
            document.selection.createRange().text = text;
        }
    }

    render() { 
        return (
            <li className="letter" onClick={(e) => this.handleButtonClick(this.props.letter, e)}>{this.props.letter}</li>
        );
    }
}
 
export default LetterKeyboardButton;