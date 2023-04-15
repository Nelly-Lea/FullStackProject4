import React, { Component } from 'react';

class OptionButton extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this); 
        this.state = {isActive: false, id: this.props.option}
    }

    handleButtonClick () {
        this.setState(prevState => ({isActive: !prevState.isActive}));
    }

    render() { 

        return (
            <button className={this.getButtonClasses()} id={this.state.id}>
                <i className={this.getIconClasses}/>
            </button>
        );
    }

    getButtonClasses () {
        let classes = "option-button format";
        classes += this.state.isActive === true ? "active" : "";
        return classes;
    }

    getIconClasses () {
        let classes = "fa-solid fa-";
        classes += this.state.id;
        return classes;
    }
}
 
export default OptionButton;