import React, { Component } from 'react';

class AdvancedOptionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }

        this.handleButtonClick = this.handleButtonClick.bind(this); 
        this.getIconClasses = this.getIconClasses.bind(this);
    }

    handleButtonClick () {
        this.setState(prevState => ({isActive: !prevState.isActive}));
        console.log("Button Clicked");
    }

    render() { 

        return (
            <button className="adv-option-button" id={this.props.option} onClick={this.handleButtonClick}>
                <i className={this.getIconClasses()}/>
            </button>
        );
    }

    getIconClasses () {
        let classes = "fa-solid fa-";
        if (this.props.iclass) {
            classes += this.props.iclass;
        } else {
            classes += this.props.option;
        }
        
        return classes;
    }
}
 
export default AdvancedOptionButton;