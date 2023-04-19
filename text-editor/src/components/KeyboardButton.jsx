import React, { Component } from 'react';

class KeyboardButton extends Component {
    constructor(props) {
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
            <button className={this.props.bclass}  
            onClick={this.props.onShift ? this.props.onShift : (e) => this.handleButtonClick(this.valueToReturn(), e)}>
                {this.valueToReturn()}
            </button>
        );
    }

    valueToReturn() {
        return this.props.isShift ? this.props.value2 : this.props.value1;
    }

}
 
export default KeyboardButton;