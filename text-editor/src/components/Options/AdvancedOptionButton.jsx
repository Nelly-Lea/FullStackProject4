import React, { Component } from 'react';

class AdvancedOptionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSelected: null
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.getBodyButton = this.getBodyButton.bind(this);
    }

    handleSelectionChange (info, e) {
        e.preventDefault();
        document.execCommand(info, false, e.target.value);
    }

    render() { 
        if(this.props.id === 'color') {
            return (
                <>
                    <div className="input-wrapper">
                        <input type="color" id="foreColor" className="adv-option-button" 
                        onChange={(e) => this.handleSelectionChange("foreColor", e)}/>
                        <label htmlFor="foreColor">Font Color</label>
                    </div>
                    <div className="input-wrapper">
                        <input type="color" id="backColor" className="adv-option-button" 
                        onChange={(e) => this.handleSelectionChange("backColor", e)}/>
                        <label htmlFor="backColor">Highlight Color</label>
                    </div>
                </>
                    
            );

        } else {
            return (
                <select id={this.props.id} className='advanced-option-button' select={this.state.valueSelected}
                onChange={(e) => this.handleSelectionChange(this.props.id, e)}>
                    {this.getBodyButton()}
                </select>
            );
        }
    }


    getBodyButton () {
        const heading = [
            {id: 1, value: "H1"},
            {id: 2, value: "H2"},
            {id: 3, value: "H3"},
            {id: 4, value: "H4"},
            {id: 5, value: "H5"},
            {id: 6, value: "H6"},
        ]

        const fontList = [
            {id: 1, value:"Arial"},
            {id: 2, value:"Verdana"},
            {id: 3, value:"Times New Roman"},
            {id: 4, value:"Garamond"},
            {id: 5, value:"Georgia"},
            {id: 6, value:"Courier New"},
            {id: 7, value:"cursive"}
        ]

        const fontSize = [
            {id: 1, value: 6},
            {id: 2, value: 8},
            {id: 3, value: 10},
            {id: 4, value: 12},
            {id: 5, value: 14},
            {id: 6, value: 16},
            {id: 7, value: 18},
        ]

        
        switch(this.props.id) {
            case 'formatBlock':
                return heading.map(hd => (<option key={hd.id} value={hd.value}>{hd.value}</option>));
            case 'fontName':
                return fontList.map(fl => (<option key={fl.id} value={fl.value}>{fl.value}</option>));
            case 'fontSize':
                return fontSize.map(fs => (<option key={fs.id} value={fs.value}>{fs.value}</option>));
        }
    }
}
 
export default AdvancedOptionButton;