import React, { Component } from 'react';
import EnglishKeyboard from './Keyboards/EnglishKeyboard';
import HebrewKeyboard from './Keyboards/HebrewKeyboard';

class Keyboards extends Component {
    constructor (props) {
        super(props);
        this.state = {kbd: "english"}

        this.handleKbdOption = this.handleKbdOption.bind(this);
    } 

    handleKbdOption (opt) {
        this.setState({kbd: opt});
    }

    render() {

        return (
            <div>
                <div className='keyboard-options' >
                    <button className='kbd-option' onClick={() => this.handleKbdOption("english")}>EN</button>
                    <button className='kbd-option' onClick={() => this.handleKbdOption("hebrew")}>HE</button>
                </div>
               {this.getKeyboard()}
            </div>
        );
    }

    getKeyboard () {
        if (this.state.kbd === "english") {
            return <EnglishKeyboard />
        } else if (this.state.kbd === "hebrew") {
            return <HebrewKeyboard />
        }
    }
}
 
export default Keyboards;