import React, { Component } from 'react';

class SpecialKeyboardButton extends Component {
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
            <li className={this.props.class} onClick={(e) => this.handleButtonClick(this.props.value, e)}>{this.props.value}</li>
        );
    }
}
 
export default SpecialKeyboardButton;