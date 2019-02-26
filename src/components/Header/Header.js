import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={require("../../res/ehealth-logo.png")} alt={'ehealth-logo'} className="logo"/>
            </div>
        );
    }
}

export default Header;
