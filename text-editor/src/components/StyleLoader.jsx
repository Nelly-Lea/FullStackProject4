import React, { Component } from 'react';

class StyleLoader extends Component {
    render() { 
        return (<link rel="stylesheet" type="text/css" href={this.props.stylesheetPath} />);
    }
}
 
export default StyleLoader;