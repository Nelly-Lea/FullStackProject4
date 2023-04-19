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
            isShift:false
        }

        this.handleShift = this.handleShift.bind(this);
    }

    handleShift () {
        this.setState(prevState => ({isShift: !prevState.isShift}));
    } 

    render() { 
        return (
            <div id="keyboard" >
                    <EnglishKeyboardRowOne isShift={this.state.isShift} />
                    <HebrewKeyboardRowTwo isShift={this.state.isShift} />
                    <HebrewKeyboardRowThree isShift={this.state.isShift}  />
                    <HebrewKeyboardRowFour isShift={this.state.isShift}  onShift={this.handleShift}/>
                    <KeyboardButton className="space lastitem" value1=" " value2=" " />
            </div>
        );
    }
}
 
export default HebrewKeyboard;