import React, { Component } from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to={"/"}>
                    <img src={require("../../res/ehealth-logo.png")} alt={'ehealth-logo'} className="logo"/>
                </Link>
                <div className={'title-div'}>
                    {this.props.showTitle ? <h1 className={"title"}>{this.props.title}</h1> : <h1 className={"title"}/>}
                </div>
                <div className={'title-div'}>
                </div>
            </div>
        );
    }
}

export default Header;
