import React, { Component } from 'react';

class OptionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);        
        this.getButtonClasses = this.getButtonClasses.bind(this);
        this.getIconClasses = this.getIconClasses.bind(this);
    }

    handleButtonClick (btnId, e) {
        e.preventDefault();
        this.setState(prevState => ({isActive: !prevState.isActive}));
        document.execCommand(btnId, false, null);
    }

    render() { 

        return (
            <button className={this.getButtonClasses()} id={this.props.option} 
                onClick={(e) => this.handleButtonClick(this.props.option, e)}>
                <i className={this.getIconClasses()}/>
            </button>
        );
    }

    getButtonClasses () {
        let classes = "option-button ";
        if (this.props.bclass) {
            classes += this.props.bclass;
        }
        classes += this.state.isActive === true ? " active" : "";
        return classes;
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
 
export default OptionButton;