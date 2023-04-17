import React, { Component } from 'react';

class OptionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false, class: this.props.class}

        this.handleButtonClick = this.handleButtonClick.bind(this); 
        this.getIconClasses = this.getIconClasses.bind(this);
    }

    handleButtonClick () {
        this.setState(prevState => ({isActive: !prevState.isActive}));
    }

    render() { 

        return (
            <button className={this.getButtonClasses} id={this.state.option}>
                <i className={'fa-solid fa-' + this.props.class}/>
            </button>
        );
    }

    getButtonClasses () {
        let classes = "option-button format";
        classes += this.state.isActive === true ? "active" : "";
        return classes;
    }

    getIconClasses () {
        return ('fa-solid fa-' + this.props.class);
    }
}
 
export default OptionButton;