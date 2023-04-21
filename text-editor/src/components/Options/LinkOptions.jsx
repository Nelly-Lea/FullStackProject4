import React, { Component } from 'react';
import OptionButton from './OptionButton';

class LinkOptions extends Component {
    constructor (props) {
        super(props);
    }

    handleLinkClick() {
        let userLink = prompt("Enter a URL");
        let selection = document.getSelection().toString().trim();
        //if link has http then pass directly else add https
        if (/http/i.test(userLink)) {
            document.execCommand(
                'insertHTML', false, '<div contentEditable="false" > <a  href="' + userLink + '" target="_blank">' + selection + '</a></div>'
            );
        } else {
            userLink = "http://" + userLink;
            document.execCommand(
                'insertHTML', false, '<div contentEditable="false" > <a href="' + userLink + '" target="_blank">' + selection + '</a></div>'
            );
        }
    }

    handleUnlinkClick(e) {
        e.preventDefault();
        document.execCommand("unlink", false, false);
    }

    render () {

        return(
            <>
                <OptionButton option="createLink" iclass="link" onClick={this.handleLinkClick} />
                <OptionButton option="unlink" onClick={(e) => this.handleUnlinkClick(e)} />
            </>
        );
    }
        

}
 
export default LinkOptions;