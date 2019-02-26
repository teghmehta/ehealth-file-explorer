import React, { Component } from 'react';
import './AppDiv.css';

class AppDiv extends Component {
    render() {
        let logoPath = this.props.logoPath;
        //this.props.logoPath
        return (
            <div className="app-logo">
                <h2 className={"app-name"}>{this.props.appName}</h2>
                <a href={this.props.path}>
                    <img src={logoPath} alt={this.props.appName} className="app-logo-img"/>
                </a>
            </div>
        );
    }
}

export default AppDiv;
