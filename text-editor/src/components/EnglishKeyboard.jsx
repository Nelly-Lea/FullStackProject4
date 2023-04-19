import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';
import LetterKeyboardButton from './LetterKeyboardButton';
import SpecialKeyboardButton from './SpecialKeyboardButton';

class EnglishKeyboard extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div class="keyboard-container">
                <ul id="keyboard">
                    <RowOne />
                    <RowTwo />
                    <RowThree />
                    <RowFour />
                    <SpecialKeyboardButton class="space lastitem" value="&nbsp;" />
                </ul>
            </div>
        );
    }
}

function RowOne (props) {
    const symbols = [
        {id: 1, off:"`", on:"~"},
        {id: 2, off:"1", on:"!"},
        {id: 3, off:"2", on:"@"},
        {id: 4, off:"3", on:"#"},
        {id: 5, off:"4", on:"$"},
        {id: 6, off:"5", on:"%"},
        {id: 7, off:"6", on:"^"},
        {id: 8, off:"7", on:"&amp;"},
        {id: 9, off:"8", on:"*"},
        {id: 10, off:"9", on:"("},
        {id: 11, off:"0", on:")"},
        {id: 12, off:"-", on:"_"},
        {id: 13, off:"=", on:"+"}
    ]

    return (
        <>
            <SymbolKeyboardButtons buttons={this.symbolsButtons} />
            <SpecialKeyboardButton class="delete lastitem" value="delete" />
        </>
    )
}

function RowTwo (props) {
    const letters = [
        {id: 14, letter: "q"},
        {id: 15, letter: "w"},
        {id: 16, letter: "e"},
        {id: 17, letter: "r"},
        {id: 18, letter: "t"},
        {id: 19, letter: "y"},
        {id: 20, letter: "u"},
        {id: 21, letter: "i"},
        {id: 22, letter: "o"},
        {id: 23, letter: "p"}
    ]

    const symbols = [
        {id: 24, off:"[", on:"{"},
        {id: 25, off:"]", on:"}"},
        {id: 26, off:"\"", on:"|", class: " lastitem"},
    ]

    return (
        <>
            <SpecialKeyboardButton class="tab" value="tab" />
            <LetterKeyboardButtons buttons={this.letters} />
            <SymbolKeyboardButtons buttons={this.symbols} />
        </>
    )
}

function RowThree (props) {

    const letters = [
        {id: 27, letter: "a"},
        {id: 28, letter: "s"},
        {id: 29, letter: "d"},
        {id: 30, letter: "f"},
        {id: 31, letter: "g"},
        {id: 32, letter: "h"},
        {id: 33, letter: "j"},
        {id: 34, letter: "k"},
        {id: 35, letter: "l"}
    ]

    const symbols = [
        {id: 36, off:";", on:":"},
        {id: 37, off:"'", on:"&quot;"},
    ]

    return (
        <>
            <SpecialKeyboardButton class="capslock" value="caps lock" />
            <LetterKeyboardButtons buttons={this.letters} />
            <SymbolKeyboardButtons buttons={this.symbols} />
            <SpecialKeyboardButton class="return lastitem" value="return" />
        </>
    )
}

function RowFour (props) {

    const letters = [
        {id: 38, letter: "z"},
        {id: 39, letter: "x"},
        {id: 40, letter: "c"},
        {id: 41, letter: "v"},
        {id: 42, letter: "b"},
        {id: 43, letter: "n"},
        {id: 44, letter: "m"}
    ]

    const symbols = [
        {id: 45, off:",", on:"&lt;"},
        {id: 46, off:".", on:"&gt;"},
        {id: 47, off:"/", on:"?"},
    ]

    return (
        <>
            <SpecialKeyboardButton class="left-shift" value="shift" />
            <LetterKeyboardButtons buttons={this.letters} />
            <SymbolKeyboardButtons buttons={this.symbols} />
            <SpecialKeyboardButton class="right-shift lastitem" value="shift" />
        </>
    )
}

function SymbolKeyboardButtons (props) {
    const symbols = this.props.buttons;
    return symbols.map(btn =>  
        (<><KeyboardButton key={btn.id} on={btn.on} off={btn.off} class={btn.class ? "symbol"+ btn.class : "symbol"} /> </>));
}

function LetterKeyboardButtons (props) {
    const symbols = this.props.buttons;
    return symbols.map(btn =>  (<><LetterKeyboardButton key={btn.id} letter={btn.letter} /> </>));
}


export default EnglishKeyboard;