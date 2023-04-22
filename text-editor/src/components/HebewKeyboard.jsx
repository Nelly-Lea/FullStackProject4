import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';
import LetterKeyboardButton from './LetterKeyboardButton';
import SpecialKeyboardButton from './SpecialKeyboardButton';

class HebrewKeyboard extends Component {
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
            <SymbolKeyboardButtons  buttons={symbols} /> 
            <SpecialKeyboardButton class="delete lastitem" value="delete" />
        </>
    )
}

function RowTwo (props) {
    const letters = [
        {id: 14, letter: "/"},
        {id: 15, letter: "'"},
        {id: 16, letter: "ק"},
        {id: 17, letter: "ר"},
        {id: 18, letter: "א"},
        {id: 19, letter: "ט"},
        {id: 20, letter: "ו"},
        {id: 21, letter: "ן"},
        {id: 22, letter: "ם"},
        {id: 23, letter: "פ"}
    ]

    const symbols = [
        {id: 24, off:"[", on:"{"},
        {id: 25, off:"]", on:"}"},
        {id: 26, off:"\"", on:"|", class: " lastitem"},
    ]

    return (
        <>
            <SpecialKeyboardButton class="tab" value="tab" />
            <LetterKeyboardButtons buttons={letters} />
            <SymbolKeyboardButtons buttons={symbols} />
        </>
    )
}

function RowThree (props) {

    const letters = [
        {id: 27, letter: "ש"},
        {id: 28, letter: "ד"},
        {id: 29, letter: "ג"},
        {id: 30, letter: "כ"},
        {id: 31, letter: "ע"},
        {id: 32, letter: "י"},
        {id: 33, letter: "ח"},
        {id: 34, letter: "ל"},
        {id: 35, letter: "ך"}
    ]

    const symbols = [
        {id: 36, off:"ף", on:":"},
        {id: 37, off:"'", on:"&quot;"},
    ]

    return (
        <>
            <SpecialKeyboardButton class="capslock" value="caps lock" />
            <LetterKeyboardButtons buttons={letters} />
            <SymbolKeyboardButtons  buttons={symbols} /> 
            <SpecialKeyboardButton class="return lastitem" value="return" />
        </>
    )
}

function RowFour (props) {

    const letters = [
        {id: 38, letter: "ז"},
        {id: 39, letter: "ס"},
        {id: 40, letter: "ב"},
        {id: 41, letter: "ה"},
        {id: 42, letter: "נ"},
        {id: 43, letter: "מ"},
        {id: 44, letter: "צ"}
    ]

    const symbols = [
        {id: 45, off:"ת", on:"&lt;"},
        {id: 46, off:"ץ", on:"&gt;"},
        {id: 47, off:".", on:"?"},
    ]
   
    return (
        <>
            <SpecialKeyboardButton class="left-shift" value="shift" />
            <LetterKeyboardButtons buttons={letters} />
            <SymbolKeyboardButtons  buttons={symbols} /> 
            <SpecialKeyboardButton class="right-shift lastitem" value="shift" />
        </>
    )
}

function SymbolKeyboardButtons (props) {
    const symbols = props.buttons;
    return symbols.map(btn =>  
        (<KeyboardButton key={btn.id} on={btn.on} off={btn.off} class={btn.class ? "symbol"+ btn.class : "symbol"}/> ));

}

function LetterKeyboardButtons (props) {
    const symbols = props.buttons;
    return symbols.map(btn =>  (<LetterKeyboardButton key={btn.id} letter={btn.letter} /> ));
}


export default HebrewKeyboard;